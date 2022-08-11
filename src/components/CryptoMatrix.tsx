import { Component, onMount } from 'solid-js';

import Box from '@suid/material/Box';

import * as PIXI from 'pixi.js';

import './CryptoMatrix.css';

import bitcoinPngUrl from '../assets/crypto/coins/rounded/bitcoin.png';
import ethereumPngUrl from '../assets/crypto/coins/rounded/ethereum.png';
import moneroPngUrl from '../assets/crypto/coins/rounded/monero.png';

class MatrixEffect {
  body: object;
  gradTexture: PIXI.Texture;
  speed: number;
  delay: number;
  x: number;
  y: number;
  width: number;
  height: number;
  children: [];
  maxChildren: number;
  elapsed: number;
  totalElapsed: number;

  constructor(body) {
    this.body = body;
    this.speed = 0;
    this.delay = 0;
    this.x = 0;
    this.y = 0;
    this.children = []
    this.maxChildren = 0
    this.elapsed = 0
    this.totalElapsed = 0
  }

  randomize() {
    this.speed = 1000 / (200 + Math.random() * 100);
    this.delay = Math.random() * 1000;
    this.x = Math.round((this.body.clientWidth / 32 * Math.random())) * 32;
    this.y = 0;
    this.children = [];
    this.maxChildren = 10 + Math.round(5 * Math.random());
  }

  update(app, textures, delta): void {
    if (this.totalElapsed < this.delay || this.elapsed < this.speed) {
      this.elapsed += delta;
    } else {
      this.y += 32;
      if (this.y > this.body.clientHeight + (32 * this.maxChildren)) {
        for (let child of this.children) {
          app.stage.removeChild(child);
        }
        this.randomize();
      } else {
        const entries = Object.keys(textures);
        const texture = textures[entries[Math.floor(Math.random()*entries.length)]];
        let newChild = new PIXI.Sprite(texture);
        newChild.x = this.x;
        newChild.y = this.y;
        newChild.alpha = 0.20;
        newChild.tint = 0xE93C0C;
        app.stage.addChild(newChild);
        this.children.push(newChild);
        if (this.children.length > this.maxChildren) {
          const child = this.children.shift();
          app.stage.removeChild(child);
        }
      }
      const step = 0.20 / this.children.length;
      let a = step;
      for (let child of this.children) {
        child.alpha = a;
        a += step;
        if (child != this.children[this.children.length-1]) {
          child.tint = 0x000000;
        }
      }
      this.elapsed = 0;
    }
    this.totalElapsed += delta;
  }
}

const CryptoMatrix: Component = (props) => {
  onMount(async () => {
    const body = document.querySelector('body');
    const app = new PIXI.Application({
      backgroundColor: 0xF8F7F1,
      autoDensity: true,
      width: body.clientWidth,
      height: body.clientHeight,
      resizeTo: body,
    });
    let container = document.getElementById('crypto-matrix');
    container.appendChild(app.view);
    
    const maxEffectCount = 10;
    let effects = [];
    app
    .loader
    .add('bitcoin', bitcoinPngUrl)
    .add('ethereum', ethereumPngUrl)
    .add('monero', moneroPngUrl)
    .load((loader, resources) => {
      for (let i = 0; i < maxEffectCount; i++) {
        let matrixEffect = new MatrixEffect(body);
        matrixEffect.randomize();
        effects.push(matrixEffect);
      }

      const textures = {
        bitcoin: resources.bitcoin.texture,
        ethereum: resources.ethereum.texture,
        monero: resources.monero.texture
      }
    
      app.ticker.add((delta) => {
        for (let matrixEffect of effects) {
          matrixEffect.update(app, textures, delta)
        }
      });
    });
  });

  return (
    <Box>
      <div class='crypto-matrix' id='crypto-matrix'/>
    </Box>
  );
};

export default CryptoMatrix;

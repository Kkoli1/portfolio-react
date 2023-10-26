import React from 'react'
import '../App.css'
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  return (
    <div id="experience-section">
      <div className="experience-section-wrapper">
        <h1><b>THIS IS A TEST</b></h1>
      </div>
    </div>
  )
}

import React from 'react'
import { Animator, Fade, MoveOut, ScrollContainer, ScrollPage, Sticky, batch ,FadeIn,ZoomIn,StickyIn,Move, MoveIn,ZoomOut} from 'react-scroll-motion'
import './Scroll_Animation.css'

export default function Scroll_Animation() {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
    const FadeUp = batch(FadeIn(), Move(), Sticky());
  return (
    <>
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(Sticky(),Fade(),MoveOut(0,-200))}>
                    <p>Scroll Down, 👇</p>
                </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}>
                    <p>Hello Everyone ✨✨ </p>
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={FadeUp}>
                    <p>Welcome to my Profile 🧡 </p>
                </Animator>
            </ScrollPage>
            <ScrollPage page={3}>
                <div className='section'> 
                    <h3>
                        <Animator animation={batch(MoveIn(-1000,0),Fade(),ZoomIn())}>Scroll More</Animator>
                        <Animator animation={batch(MoveOut(),Fade(),ZoomOut())}>To know me better 😁😁</Animator>
                    </h3>
                </div>
            </ScrollPage>
        </ScrollContainer>
    </>
  )
}

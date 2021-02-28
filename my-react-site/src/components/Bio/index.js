import React from 'react';
import './index.css';

function Bio() {
  return(
    <main className="p-3">
      <section className="row mt-4">
        <h4 className="col-2 text-end">Timeline</h4>
        <ul className="col-10 px-5">
          <li className="row pe-5 py-2">
            <p className="col-2 text-end year pe-5">'04-'05:</p>
            <p className="col-10 event">Spent a year traveling around Europe and <strong>studying abroad</strong> at l'Université de Pau et des Pays de l'Adour, France</p>
          </li>
          <li className="row pe-5 py-2">
            <p className="col-2 text-end year pe-5">2007: </p>
            <p className="col-10 event">Graduated from the University of Nevada, Reno with a <strong>B.A. in Psychology</strong></p>
          </li>
          <li className="row pe-5 py-2">
            <p className="col-2 text-end year pe-5">2009: </p>
            <p className="col-10 event">Got my <strong>M.A. in Psychology</strong> from Sonoma State University, California</p>
          </li>
          <li className="row pe-5 py-2">
            <p className="col-2 text-end year pe-5">'09-'12:</p>
            <p className="col-10 event">Went to China for 3 years where I worked as an <strong>English teacher</strong> at Jiangsu University of Technology.</p>
          </li>
          <li className="row pe-5 py-2">
            <p className="col-2 text-end year pe-5">2012:</p>
            <p className="col-10 event">Got <strong>married</strong> and moved back to California</p>
          </li>
          <li className="row pe-5 py-2">
            <p className="col-2 text-end year pe-5">'13-'14:</p>
            <p className="col-10 event">Entered banking and became an <strong>assistant manager</strong> for a branch in Corte Madera, CA</p>
          </li>
          <li className="row pe-5 py-2">
            <p className="col-2 text-end year pe-5">'14-'16:</p>
            <p className="col-10 event">Upgraded to a <strong>financial advisor</strong> for Edward Jones Investments and ran an office in Larkspur, CA</p>
          </li>
          <li className="row pe-5 py-2">
            <p className="col-2 text-end year pe-5">'16-'20:</p>
            <p className="col-10 event">Moved to Sacramento, CA to become <strong>self-employed</strong> where I sold and repaired automotive equipment</p>
          </li>
          <li className="row pe-5 py-2">
            <p className="col-2 text-end year pe-5">2021:</p>
            <p className="col-10 event">Graduated from U.C. Berkeley's full-stack web development bootcamp to pursue a career as a <strong>web developer</strong></p>
          </li>
        </ul>
        <hr class="mx-auto w-50 mt-2"></hr>
      </section>
      <section class="row mt-4">
      <h4 className="col-2 text-end">Interests</h4>
      <div class="col-10 px-5">
        <p>These days I spend nearly every waking moment improving my craft as a web developer. When my face isn't buried in my screen, it is usually buried in a book. I am an avid reader, and while have enjoyed fiction in the past, I mostly read history and the occasional biography now.</p> 
        <p>I love to travel and immerse myself in different cultures. I caught the travel bug when I did a year studying abroad in France and exploring Europe, and I later spent an exciting few years working in China as an English teacher. Two of my favorite things to do when I can find the time are skiing and scuba-diving.</p>
        <p>My great loves in life are my beautiful wife, my cat, and my work.</p>
      </div>
      </section>
    </main>
  )
}

export default Bio;
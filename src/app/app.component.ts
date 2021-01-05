import { Component, Inject, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OnlineResume';
  public loading: boolean = false;
  works: Array<{jobName: string, company: string, date: string, description: string, achievements: string, tech: Array<string>}> = [
    {
      jobName: 'Angular Developer',
      company: 'MGI Digital Technology',
      date: 'Apr 2019 - Now',
      description: 'MGI is specialized in manufacturing industrial printers for Graphic arts, you can learn more on their website. Start of 2019, I joined a team of 2 back developer and one front developer with the goal of designing and creating a new HCI for all the machines produced by MGI.\n\
      An older version already existed, but nothing was already done in Angular, we started together from scratch and we now have more than 50 pages, 200 components and a solid back end.',
      achievements: 'When thinking about my biggest achievement, there is one page that come to my mind. The user needed to visualize all the printhead available on the machine, their state, and their calibration. I had to develop a screen, where the user could, pan and zoom (tactil and mouse) on an infinite grid, select heads and move them on that same grid.\n\
      It was a difficult challenge because I needed to work with matrices for the grid, and I needed to deepen my understanding of RxJS to handle user actions.',
      tech: ['Angular', 'Ngrx', 'RxJs', 'HTML', 'CSS', 'Git', 'TypeScript']
    },
    {
      jobName: 'Internship Web integrator',
      company: 'Meltdown Esports Bar',
      date: 'June 2018 - December 2018',
      description: 'In the context of my studies in school 42, I did an internship for Meltdown esports bar. Meltdown is a company owning many bars, worldwide, specialized in gaming. Each bar possess computers and console so you can play or watch a tournament while enjoying a beer.\n\
      They needed someone to help developing trible.club (now closed), summerfestival.meltdown.bar, a temporary website, and finally, redesigning and redeveloping their old website, meltdown.bar. For 6 month I worked in close collaboration with designers, community managers and developers, to make the best possible website.',
      achievements: 'My biggest achievement during that internship definitely was summerfestival.meltdown.bar. In collaboration with League of Legends, Meltdown organized a charity event for Make-A-Wish. For a whole week, events were happening in bars and some of the earning was donated to Make-A-Wish.\n\
      Some streamers were also casting for the event. During that week, people could also donate on the website, wich was promoted on League Of Legends launcher. It was one of my first website, but it\'s definitely the one that got the most visit, and working with League Of Legends and streamers for a charity was very rewarding !',
      tech: ['Javascript', 'HTML', 'CSS', 'NodeJS', 'Git']
    },
  ];
  skills: Array<{name: string, value: number}> = [
    {
      name: 'Angular',
      value: 70,
    },
    {
      name: 'Typescript',
      value: 70,
    },
    {
      name: 'Javascript',
      value: 70,
    },
    {
      name: 'NgRx',
      value: 70,
    },
    {
      name: 'RxJS',
      value: 50,
    },
    {
      name: 'Ramda',
      value: 40,
    },
    {
      name: 'HTML',
      value: 90,
    },
    {
      name: 'CSS',
      value: 80,
    },
    {
      name: 'Git',
      value: 70,
    },
  ];
  faArrowDown = faArrowCircleDown;

  createPDF(data: HTMLElement): Promise<any> {
    return html2canvas(data, {
      scrollY: -window.scrollY,
      scale: 2,
    }).then((canvas) => {
      let dataURL = canvas.toDataURL('image/jpeg', 2.0);
      return new Promise(resolve => {
        
        const doc = new jsPDF();
        let width = doc.internal.pageSize.getWidth()
        let height = doc.internal.pageSize.getHeight()
        let widthRatio = width / canvas.width
        let heightRatio = height / canvas.height
        let ratio = widthRatio > heightRatio ? heightRatio : widthRatio

        doc.addImage(dataURL, 'JPEG', 0, 0, canvas.width * ratio, canvas.height * ratio)
        doc.text('This PDF was generated from https://www.online-resume.phamelin.fr/', 20, canvas.height * ratio + 20);
        doc.save('Phamelin_Resume.pdf');
        setTimeout(()=>{
          resolve('resolved');
          },3000)
      });
    });
  }

  download(data: HTMLElement) {
    this.loading = true;
    this.createPDF(data).then(() => this.loading = false)
  }
}

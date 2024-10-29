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
  public lang: string = 'ENG';
  public loading: boolean = false;
  public works: Array<{jobName: string, company: string, date: string, description: string, achievements: string, tech: Array<string>}> = [
    {
      jobName: 'Angular Developer',
      company: 'Arteris IP',
      date: 'May 2021 - Now',
      description: 'Arteris IP is in the industry of Semiconductors and Electronic Design Automation (EDA). In 2021, I joined a small team of 6 developers to build a new software from scratch using Angular 10. I mainly focused on building my skills in architecture, pattern designs and unit/e2e tests. \n\
      Creating the software from scratch was a huge challenge and allowed me to deepend my understanding of building a good application from start to avoid futur problems.',
      achievements: 'I learned and accomplished a lot during those two years at Arteris, but I mostly honed my skills in front-end and am now confident in being responsible for the front-end of an application, and even managing a small team of front-end developers as I had to guide an internship during 6 month.\n\
      If i had to chose, my biggest achievements would be to have recreated from scratch, to better fit our need, many angular material components, such as a complicated table, a tree explorer or a file-upload drag and drop zone.',
      tech: ['Angular', 'RxJs', 'HTML', 'CSS', 'Git', 'TypeScript', 'Design Pattern']
    },
    {
      jobName: 'Angular Developer',
      company: 'MGI Digital Technology',
      date: 'Apr 2019 - Apr 2021',
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
      They needed someone to help developing tribe.club (now closed), summerfestival.meltdown.bar, a temporary website, and finally, redesigning and redeveloping their old website, meltdown.bar. For 6 month I worked in close collaboration with designers, community managers and developers, to make the best possible website.',
      achievements: 'My biggest achievement during that internship definitely was summerfestival.meltdown.bar. In collaboration with League of Legends, Meltdown organized a charity event for Make-A-Wish. For a whole week, events were happening in bars and some of the earning was donated to Make-A-Wish.\n\
      Some streamers were also casting for the event. During that week, people could also donate on the website, wich was promoted on League Of Legends launcher. It was one of my first website, but it\'s definitely the one that got the most visit, and working with League Of Legends and streamers for a charity was very rewarding !',
      tech: ['Javascript', 'HTML', 'CSS', 'NodeJS', 'Git']
    },
  ];
  public travaux: Array<{jobName: string, company: string, date: string, description: string, achievements: string, tech: Array<string>}> = [
    {
      jobName: 'Développeur Angular',
      company: 'Arteris IP',
      date: 'Mai 2021 - Maintenant',
      description: 'Arteris IP est dans l\'industrie du semi-conducteur et des Electronic Design Automation (EDA). En 2021, j\'ai rejoint une petite équipe de 6 développeurs pour construire depuis zéro un nouveau logiciel utilisant Angular 10. Je me suis surtout concentré sur le polissage de mes compétences en architecture, design pattern et tests unitaires / e2e. \n\
      Créer le logiciel depuis zéro a été un énorme challenge et m\'a permis de renforcer ma compréhension et ma capacité à développer une bonne application dés le début pour éviter de futurs complications.',
      achievements: 'J\'ai appris et accompli beaucoup durant ces deux années chez Arteris, mais j\'ai surtout pu améliorer mes compétences en Front-End et je suis maintenant confiant en ma capacité à devenir responsable du front-end d\'un logiciel, voir même manager une petite équipe de développeurs Front-End, car pendant ces deux ans, j\'ai formé et me suis occupé pendant 6 mois d\'un stagiaire.\n\
      Si je devais choisir, mes plus grands accomplissements seraient d\'avoir recréer, from scratch, et pour correspondre au mieux à nos besoins, plusieurs composants Angular Material comme une table complexe, un explorateur de fichier en arbre, ou une zone d\'upload de fichier et dossiers supportant le drag and drop.',
      tech: ['Angular', 'Ngrx', 'RxJs', 'HTML', 'CSS', 'Git', 'TypeScript']
    },
    {
      jobName: 'Développeur Angular',
      company: 'MGI Digital Technology',
      date: 'Avr 2019 - Maintenant',
      description: 'MGI est spécialisé dans la construction d\'imprantes industrielles pour les Arts Graphiques, vous pouvez en apprendre plus sur leur site. Début 2019, j\'ai rejoint une équipe de 2 développeurs back et un développeur front, avec pour objectif de designer et créer une nouvelle IHM pour toutes les machines produites par MGI.\n\
      Une version plus ancienne de cette IHM existait déjà mais elle n\'était pas en Angular, nous avons commencé le projet de 0 et ce dernier possède maintenant plus de 50 pages, 200 composants et un back end solide.',
      achievements: 'Mon plus gros challenge et ma plus grande fierté est une page en particulier. L\'utilisateur devait être capable de visualiser facilement toutes les têtes d\'impression présente sur la machine, ainsi que leur état et leur calibration. Je devais donc développer un écran où l\'utilisateur pourrait se déplacer et zoomer sur une grille infinie, sélectionner une ou plusieurs têtes, et les déplacer sur cette grille. \n\
      C\'était un challenge difficile car il a fallu travailler avec des matrices et des SVG pour la grille, et que je devais parfaire ma compréhension de RxJS pour gérer les actions de l\'utilisateur',
      tech: ['Angular', 'Ngrx', 'RxJs', 'HTML', 'CSS', 'Git', 'TypeScript']
    },
    {
      jobName: 'Intégrateur web - Stage',
      company: 'Meltdown Esports Bar',
      date: 'Juin 2018 - Décembre 2018',
      description: 'Dans le context de mes études à l\'école 42, j\'ai réalisé un stage pour les bars Meltdown. Meltdown, c\'est une chaîne de bar gaming, exporté partout dans le monde. Chaque bar possède des ordinateurs et des consoles, afin que le client puisse jouer ou regarder un tournoi en profitant d\'une boisson\n\
      Ils avaient besoin d\'aide pour développer le site tribe.club, summerfestival.meltdown.bar, un site temporaire, et finalement, repensé et redéveloppé leur ancien site, meltdown.bar. Pendant 6 mois, j\'ai travaillé en étroite collaboration avec des désigneurs, community manager et développeurs afin de faire le meilleur site possible.',
      achievements: 'Ma plus grande fierté pendant ce stage était sans conteste le site summerfestival.meltdown.bar. En collaboration avec League Of Legends, Make-A-Wish, et des streameurs français, les bars Meltdown ont organisé un évenement carritatif durant lequel une partie des gains du bar étaient reversé à l\'association.\n\
      Pendant cet évenement, les gens pouvaient aussi faire des donations sur le site internet summerfestival.meltdown.bar, et ce dernier a été mis en avant sur le launcher League Of Legends, dans les bars, et sur différents stream. C\'était un de mes premiers sites internet, et probablement celui qui comptabilise le plus de visite. De plus, travailler pour une association caritative était très satisfaisant !',
      tech: ['Javascript', 'HTML', 'CSS', 'NodeJS', 'Git']
    },
  ];
  skills: Array<{name: string, value: number}> = [
    {
      name: 'Angular',
      value: 90,
    },
    {
      name: 'Jest',
      value: 60,
    },
    {
      name: 'Unit testing',
      value: 60,
    },
    {
      name: 'Typescript',
      value: 90,
    },
    {
      name: 'Javascript',
      value: 90,
    },
    {
      name: 'NgRx',
      value: 70,
    },
    {
      name: 'RxJS',
      value: 70,
    },
    {
      name: 'Ramda',
      value: 40,
    },
    {
      name: 'HTML',
      value: 100,
    },
    {
      name: 'CSS',
      value: 90,
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

  download(data: HTMLElement): void {
    this.loading = true;
    this.createPDF(data).then(() => this.loading = false)
  }

  setLang(newLang: string): void {
    this.works = (newLang === 'FR') ? this.travaux : this.works;
    this.lang = newLang;
  }
}

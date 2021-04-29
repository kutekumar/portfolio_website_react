//Import Images
// import athlete from './img/athlete-small.png';
// import goodtimes from './img/goodtimes-small.png';
// import theracer from './img/theracer-small.png';
// import athlete2 from './img/athlete2.png';
// import goodtimes2 from './img/good-times2.jpg';
// import theracer2 from './img/the-racer2.jpg';
import theflower1 from "./img/theflower1.jpg";
import theflower2 from "./img/theflower2.jpg";
import sunrise1 from "./img/sunrise1.jpg";
import sunrise2 from "./img/sunrise2.jpg";
import thepark1 from "./img/thepark1.jpg";
import thepark2 from "./img/thepark2.jpg";
import thekid1 from "./img/thekid1.jpg";
import thekid2 from "./img/thekid2.jpg";

export const MovieState = () => {
  return [
    {
      title: 'The Elegant Evening',
      mainImg: sunrise1,
      secondaryImg: sunrise2,
      url: '/work/evening',
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'The Blooms',
      mainImg: theflower1,
      url: '/work/blooms',
      secondaryImg: theflower2,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'The Innocent',
      mainImg: thekid1,
      url: '/work/the-racer',
      secondaryImg: thekid2,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'The Park',
      mainImg: thepark1,
      url: '/work/thepark',
      secondaryImg: thepark2,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ];
};

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
      title: "The Elegant Evening",
      mainImg: sunrise1,
      secondaryImg: sunrise2,

      url: "/work/evening",
      awards: [
        {
          title: "Yangon's evening view from my balcony.",
          description:
            "“The delicate unplanned capture with my SLR camera with multiple exposure shots.”",
        },
      ],
    },
    {
      title: "The Blooms",
      mainImg: theflower1,
      url: "/work/blooms",
      secondaryImg: theflower2,
      awards: [
        {
          title: "Some Displays of Flowers Show in Yangon",
          description:
            "“The Flowers Display Show which held on 2018 in Yangon Kandaw Gyi Park.”",
        },
      ],
    },
    {
      title: "The Innocent",
      mainImg: thekid1,
      url: "/work/the-racer",
      secondaryImg: thekid2,
      awards: [
        {
          title: "Students from MLA International",
          description:
            "“Some shots which I took on 2018 in MLA International School where I works which is one of the reputed school in Yangon.”",
        },
      ],
    },
    {
      title: "The Park",
      mainImg: thepark1,
      url: "/work/thepark",
      secondaryImg: thepark2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};

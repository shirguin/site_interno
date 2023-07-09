import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    projectFilter_tag: "",
    project_tags: ["Bathroom", "Bed Room", "Kitchan", "Living Area"],
    projects: [
      {
        id: 0,
        imgSrc: "img/Photo_18.png",
        imgAlt: "Photo_18",
        title: "Minimal Bedroom",
        project_tag: "Bed Room",
        isliked: true,
      },
      {
        id: 1,
        imgSrc: "img/Photo_19.png",
        imgAlt: "Photo_19",
        title: "Minimal Bedroom",
        project_tag: "Bathroom",
        isliked: false,
      },
      {
        id: 2,
        imgSrc: "img/Photo_20.png",
        imgAlt: "Photo_20",
        title: "Classic Minimal Bedroom",
        project_tag: "Kitchan",
        isliked: false,
      },
      {
        id: 3,
        imgSrc: "img/Photo_21.png",
        imgAlt: "Photo_21",
        title: "Modern Bedroom",
        project_tag: "Living Area",
        isliked: true,
      },
      {
        id: 4,
        imgSrc: "img/Photo_22.png",
        imgAlt: "Photo_22",
        title: "Minimal Bedroom table",
        project_tag: "Bathroom",
        isliked: false,
      },
      {
        id: 5,
        imgSrc: "img/Photo_23.png",
        imgAlt: "Photo_23",
        title: "System Table",
        project_tag: "Bed Room",
        isliked: false,
      },
      {
        id: 6,
        imgSrc: "img/Photo_24.png",
        imgAlt: "Photo_24",
        title: "Modern Medroom",
        project_tag: "Kitchan",
        isliked: false,
      },
      {
        id: 7,
        imgSrc: "img/Photo_25.png",
        imgAlt: "Photo_25",
        title: "Modern Bedroom",
        project_tag: "Living Area",
        isliked: false,
      },
    ],
    projectFilter_flag: false,
    projectDetailsData: {
      title: "Minimal Look Bedrooms",
      text_1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      text_2:
        "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    },
    sliderItems: [
      { id: 0, name: "img1", img: "img/Photo_27.png" },
      { id: 1, name: "img2", img: "img/Photo_27.png" },
      { id: 2, name: "img3", img: "img/Photo_27.png" },
    ],
    articles: [
      {
        id: 0,
        imgSrc: "img/Photo_6.png",
        imgAlt: "Photo_6",
        style: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        href: "blog_details.html",
      },
      {
        id: 1,
        imgSrc: "img/Photo_7.png",
        imgAlt: "Photo_7",
        style: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022",
        href: "blog_details.html",
      },
      {
        id: 2,
        imgSrc: "img/Photo_8.png",
        imgAlt: "Photo_8",
        style: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        href: "blog_details.html",
      },
      {
        id: 3,
        imgSrc: "img/Photo_11.png",
        imgAlt: "Photo_11",
        style: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022 ",
        href: "blog_details.html",
      },
      {
        id: 4,
        imgSrc: "img/Photo_12.png",
        imgAlt: "Photo_12",
        style: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022 ",
        href: "blog_details.html",
      },
      {
        id: 5,
        imgSrc: "img/Photo_13.png",
        imgAlt: "Photo_13",
        style: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        href: "blog_details.html",
      },
    ],
    detailedArticles: [
      {
        id: 0,
        tag: "Kitchen",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 1,
        tag: "Bedroom",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 2,
        tag: "Bedroom",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 3,
        tag: "Building",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 4,
        tag: "Architecture",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 5,
        tag: "Kitchen Planning",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 6,
        tag: "Kitchen",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 7,
        tag: "Bedroom",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
    filter_flag: false,
    filter_tag: "",
    tags: [
      "Kitchen",
      "Bedroom",
      "Building",
      "Architecture",
      "Kitchen Planning",
    ],
  },

  mutations: {
    PROJECT_FILTER(state, tag) {
      state.projectFilter_flag = true;
      state.projectFilter_tag = tag;
    },

    CHANGE_LIKE(state, id) {
      const project = state.projects.filter((project) => project.id === id)[0];
      project.isliked = !project.isliked;
    },

    FILTER(state, tag) {
      state.filter_flag = true;
      state.filter_tag = tag;
    },
  },

  getters: {
    getArticles:(state)=>state.articles,
    getProjects: (state) => state.projects,
    getProjectFilterTag: (state) => state.projectFilter_tag,
    getProjectFilterFlag: (state) => state.projectFilter_tag,
    getDetailedArticles: (state) => state.detailedArticles,
    getFilterFlag: (state) => state.filter_flag,
    getFilterTag: (state) => state.filter_tag,
    getTags: (state) => state.tags,
  },
});

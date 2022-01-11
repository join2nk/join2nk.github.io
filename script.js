var app = Vue.createApp({
  data() {
    return {
      navshow: false,
      dashLinks: [{
        link: "zen/index.html",
        label: "zen"
      }, {
        link: "milling/milling.html",
        label: "Milling"
      }, {
        link: "test/test.html",
        label: "Test"
      }, {
        link: "milling_2/index.html",
        label: "Milling 2"
        // },{
        //   link: "",
        //   label: ""
        // },{
        //   link: "",
        //   label: ""
      }],
      data:""
    }
  },
  methods: {

  }
})

app.mount("#app")
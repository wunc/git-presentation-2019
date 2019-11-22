let app = new Vue({
  el: '#root',

  data: {
    sections: document.querySelectorAll('section'),
    currentSection: 0,
  },

  methods: {
    isCurrentSection(section) {
      return section === this.currentSection;
    },
    setCurrentSection(section) {
      this.currentSection = section;
      window.scrollTo(0,0);
    },
    nextSection() {
      return (this.currentSection >= this.sections.length - 1) ? 0 : this.currentSection + 1;
    },
    previousSection() {
      return (this.currentSection === 0) ? this.sections.length - 1 : this.currentSection - 1;
    },
    gotoNextSection() {
      this.setCurrentSection(this.nextSection());
    },
    gotoPreviousSection() {
      this.setCurrentSection(this.previousSection());
    },
  },

});
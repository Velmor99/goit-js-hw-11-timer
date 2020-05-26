class CountdownTimer {
  constructor(birthDate) {
    this.birthDate = birthDate.targetDate;
  }
  setTimeOnPage() {
    let time = this.birthDate.getTime() - new Date(Date.now()).getTime();
    const daySpan = document.querySelector('[data-value="days"]');
    const hourSpan = document.querySelector('[data-value="hours"]');
    const minSpan = document.querySelector('[data-value="mins"]');
    const secSpan = document.querySelector('[data-value="secs"]');
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    daySpan.textContent = days
    hourSpan.textContent = hours
    minSpan.textContent = mins
    secSpan.textContent = secs
  }
  updateTime () {
    setInterval(() => this.setTimeOnPage(), 1000);
  };
};

const birthTime = new CountdownTimer({
  selector: '#timer-1',
    targetDate: new Date('June 18, 2020'),
  });
  console.log(birthTime.targetDate)
  birthTime.setTimeOnPage();
  birthTime.updateTime()
  
  
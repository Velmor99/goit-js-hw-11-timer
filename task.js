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
  
  // /*
  //  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
  //  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
  //  */
  // const days = Math.floor(time / (1000 * 60 * 60 * 24));
  
  // /*
  //  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
  //  * остатка % и делим его на количество миллисекунд в одном часе
  //  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
  //  */
  // const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  // /*
  //  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
  //  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
  //  */
  // const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  
  // /*
  //  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
  //  * миллисекунд в одной секунде (1000)
  //  */
  // const secs = Math.floor((time % (1000 * 60)) / 1000);


  ///////////////////////////////////////////////////////////////////////////////


  // let time = new Date('June 18, 2020').getTime() - new Date(Date.now()).getTime()
  // // console.log(time)
  // const FUTURE_TIME = 'June 18, 2020';

  // const days = Math.floor(time / (1000 * 60 * 60 * 24));
  // const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  // const secs = Math.floor((time % (1000 * 60)) / 1000);

  // const daySpan = document.querySelector('[data-value="days"]');
  // const hourSpan = document.querySelector('[data-value="hours"]');
  // const minSpan = document.querySelector('[data-value="mins"]');
  // const secSpan = document.querySelector('[data-value="secs"]');
  

  // function updateTimer() {
  //   const daySpan = document.querySelector('[data-value="days"]');
  //   const hourSpan = document.querySelector('[data-value="hours"]');
  //   const minSpan = document.querySelector('[data-value="mins"]');
  //   const secSpan = document.querySelector('[data-value="secs"]');
  //   let time = new Date(FUTURE_TIME).getTime() - new Date(Date.now()).getTime()
  //   const days = Math.floor(time / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  //   const secs = Math.floor((time % (1000 * 60)) / 1000);
  //   daySpan.textContent = days
  //   hourSpan.textContent = hours
  //   minSpan.textContent = mins
  //   secSpan.textContent = secs
  // }

  // setInterval(updateTimer, 1000);
  
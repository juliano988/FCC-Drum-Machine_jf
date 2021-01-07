import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { followCursor } from 'tippy.js';
import './App.scss';
import playPiano from './playPiano.js'
import playOnKeyboard from './playOnKeyboard.js'

//This flag is necessary to prevent the user to execute the same event twice on touch screen. 
let waitFlag = false;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playingNote: '',
      collapse: false,
      selectOctave: '4',
      switchValue: true,
      volume: '100',
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClickKeys = this.handleClickKeys.bind(this);
    this.handleClickCollapse = this.handleClickCollapse.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this)
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleChangeVolume = this.handleChangeVolume.bind(this);

    this.tipBtnRef = React.createRef();
    this.collapseContentRef = React.createRef();
    this.LBtnRef = React.createRef();
    this.RBtnRef = React.createRef();
  }

  componentDidMount() {
    //Initializing the App:
    //Starting the App on 4ª octave.
    window.location.href = "#Octave-" + this.state.selectOctave;
    //Starting the App with the 'tip-btn' with width 100% and collapse closed.
    this.tipBtnRef.current.setAttribute('style', 'min-width: 100%');

    const bArr = ['Ab1', 'Ab2', 'Ab3', 'Ab4', 'Ab5', 'Ab6', 'Ab7', 'Bb0', 'Bb1', 'Bb2', 'Bb3', 'Bb4', 'Bb5', 'Bb6', 'Bb7', 'Db1', 'Db2', 'Db3', 'Db4', 'Db5', 'Db6', 'Db7', 'Eb1', 'Eb2', 'Eb3', 'Eb4', 'Eb5', 'Eb6', 'Eb7', 'Gb1', 'Gb2', 'Gb3', 'Gb4', 'Gb5', 'Gb6', 'Gb7'];
    for (let i in bArr) {
      if (document.getElementById(bArr[i])) {
        document.getElementById(bArr[i]).classList.add('b');
      }
    }
  }

  handleKeyDown(e) {
    playOnKeyboard(e.key, this.state.volume);
  }

  handleClickKeys(e) {
    if (waitFlag === false) {
      waitFlag = true;
      this.setState({
        playingNote: e.target.id || e.target.parentElement.id,
      });
      playPiano(e.target.id || e.target.parentElement.id, this.state.volume / 100);
      setTimeout(function () { waitFlag = false }, 50);
    }
  }

  handleClickCollapse() {
    this.setState({
      collapse: !this.state.collapse,
    });
    if (!this.state.collapse === true) {
      this.tipBtnRef.current.setAttribute('style', null);
      this.collapseContentRef.current.setAttribute('style', 'display: block');
    } else {
      this.tipBtnRef.current.setAttribute('style', 'min-width: 100%');
      this.collapseContentRef.current.setAttribute('style', 'display: none');
    }
  }

  handleClickLeft() {
    this.RBtnRef.current.disabled = false;
    if (Number(this.state.selectOctave) > 0) {
      this.setState({
        selectOctave: Number(this.state.selectOctave) - 1,
      });
      window.location.href = "#Octave-" + (Number(this.state.selectOctave) - 1).toString(10);
    }
    if (Number(this.state.selectOctave) - 1 === 0) {
      this.LBtnRef.current.disabled = true;
    }
  }

  handleSelect(e) {
    this.setState({
      selectOctave: e.target.value,
    });
    window.location.href = "#Octave-" + e.target.value;
  }

  handleClickRight() {
    this.LBtnRef.current.disabled = false;
    if (Number(this.state.selectOctave) < 7) {
      this.setState({
        selectOctave: Number(this.state.selectOctave) + 1,
      });
      window.location.href = "#Octave-" + (Number(this.state.selectOctave) + 1).toString(10);
    }
    if (Number(this.state.selectOctave) + 1 === 7) {
      this.RBtnRef.current.disabled = true;
    }
  }

  handleCheck() {
    this.setState({
      switchValue: !this.state.switchValue,
    });
    for (let i = 0; i <= 7; i++) {
      if (!this.state.switchValue === false) {
        document.getElementById("keyboard-octave-label-" + i.toString(10)).setAttribute('style', 'width: 0rem; border-style: none; color: transparent');
      } else {
        document.getElementById("keyboard-octave-label-" + i.toString(10)).setAttribute('style', 'width: 1.5rem; border-style: solid; color: initial');
      }
    }
  }

  handleChangeVolume(e) {
    this.setState({
      volume: e.target.value,
    })
  }

  render() {
    return (
      <div id="drum-machine" onKeyDownCapture={this.handleKeyDown} tabIndex="0">
        {/* tabInex="0" was necessary for the event to work*/}
        <header>
          <h1 id="title">Piano keyboard</h1>
          <h6 id="ass">Developed by 🎹 Júlio Faria</h6>
        </header>
        <main id="main">
          <div id="display">
            <div id="label-note">Note: </div>
            <div id="note">{this.state.playingNote}</div>
          </div>
          <div id="keyboard">
            <section id="Octave-0">
              <h3 id="keyboard-octave-label-0">0</h3>
              <div id="A0" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>A0</p></div>
              <div id="Bb0" onClick={this.handleClickKeys}></div>
              <div id="B0" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>B0</p></div>
              <div id="C1" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>C1</p></div>
              <div id="Db1" onClick={this.handleClickKeys}></div>
              <div id="D1" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>D1</p></div>
              <div id="Eb1" onClick={this.handleClickKeys}></div>
              <div id="E1" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>E1</p></div>
              <div id="F1" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>F1</p></div>
              <div id="Gb1" onClick={this.handleClickKeys}></div>
              <div id="G1" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>G1</p></div>
              <div id="Ab1" onClick={this.handleClickKeys}></div>
            </section>
            <section id="Octave-1">
              <h3 id="keyboard-octave-label-1">1</h3>
              <div id="A1" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>A1</p></div>
              <div id="Bb1" onClick={this.handleClickKeys}></div>
              <div id="B1" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>B1</p></div>
              <div id="C2" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>C2</p></div>
              <div id="Db2" onClick={this.handleClickKeys}></div>
              <div id="D2" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>D2</p></div>
              <div id="Eb2" onClick={this.handleClickKeys}></div>
              <div id="E2" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>E2</p></div>
              <div id="F2" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>F2</p></div>
              <div id="Gb2" onClick={this.handleClickKeys}></div>
              <div id="G2" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>G2</p></div>
              <div id="Ab2" onClick={this.handleClickKeys}></div>
            </section>
            <section id="Octave-2">
              <h3 id="keyboard-octave-label-2">2</h3>
              <div id="A2" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>A2</p></div>
              <div id="Bb2" onClick={this.handleClickKeys}></div>
              <div id="B2" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>B2</p></div>
              <div id="C3" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>C3</p></div>
              <div id="Db3" onClick={this.handleClickKeys}></div>
              <div id="D3" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>D3</p></div>
              <div id="Eb3" onClick={this.handleClickKeys}></div>
              <div id="E3" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>E3</p></div>
              <div id="F3" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>F3</p></div>
              <div id="Gb3" onClick={this.handleClickKeys}></div>
              <div id="G3" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>G3</p></div>
              <div id="Ab3" onClick={this.handleClickKeys}></div>
            </section>
            <section id="Octave-3">
              <h3 id="keyboard-octave-label-3">3</h3>
              <div id="A3" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>A3</p></div>
              <div id="Bb3" onClick={this.handleClickKeys}></div>
              <div id="B3" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>B3</p></div>
              <div id="C4" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>C4</p></div>
              <div id="Db4" onClick={this.handleClickKeys}></div>
              <div id="D4" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>D4</p></div>
              <div id="Eb4" onClick={this.handleClickKeys}></div>
              <div id="E4" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>E4</p></div>
              <div id="F4" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>F4</p></div>
              <div id="Gb4" onClick={this.handleClickKeys}></div>
              <div id="G4" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>G4</p></div>
              <div id="Ab4" onClick={this.handleClickKeys}></div>
            </section>
            <section id="Octave-4">
              <h3 id="keyboard-octave-label-4">4</h3>
              <div id="A4" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>A4</p></div>
              <div id="Bb4" onClick={this.handleClickKeys}></div>
              <div id="B4" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>B4</p></div>
              <div id="C5" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>C5</p></div>
              <div id="Db5" onClick={this.handleClickKeys}></div>
              <div id="D5" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>D5</p></div>
              <div id="Eb5" onClick={this.handleClickKeys}></div>
              <div id="E5" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>E5</p></div>
              <div id="F5" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>F5</p></div>
              <div id="Gb5" onClick={this.handleClickKeys}></div>
              <div id="G5" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>G5</p></div>
              <div id="Ab5" onClick={this.handleClickKeys}></div>
            </section>
            <section id="Octave-5">
              <h3 id="keyboard-octave-label-5">5</h3>
              <div id="A5" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>A5</p></div>
              <div id="Bb5" onClick={this.handleClickKeys}></div>
              <div id="B5" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>B5</p></div>
              <div id="C6" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>C6</p></div>
              <div id="Db6" onClick={this.handleClickKeys}></div>
              <div id="D6" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>D6</p></div>
              <div id="Eb6" onClick={this.handleClickKeys}></div>
              <div id="E6" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>E6</p></div>
              <div id="F6" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>F6</p></div>
              <div id="Gb6" onClick={this.handleClickKeys}></div>
              <div id="G6" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>G6</p></div>
              <div id="Ab6" onClick={this.handleClickKeys}></div>
            </section>
            <section id="Octave-6">
              <h3 id="keyboard-octave-label-6">6</h3>
              <div id="A6" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>A6</p></div>
              <div id="Bb6" onClick={this.handleClickKeys}></div>
              <div id="B6" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>B6</p></div>
              <div id="C7" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>C7</p></div>
              <div id="Db7" onClick={this.handleClickKeys}></div>
              <div id="D7" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>D7</p></div>
              <div id="Eb7" onClick={this.handleClickKeys}></div>
              <div id="E7" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>E7</p></div>
              <div id="F7" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>F7</p></div>
              <div id="Gb7" onClick={this.handleClickKeys}></div>
              <div id="G7" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>G7</p></div>
              <div id="Ab7" onClick={this.handleClickKeys}></div>
            </section>
            <section id="Octave-7">
              <h3 id="keyboard-octave-label-7">7</h3>
              <div id="A7" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>A7</p></div>
              <div id="Bb7" onClick={this.handleClickKeys}></div>
              <div id="B7" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>B7</p></div>
              <div id="C8" onClick={this.handleClickKeys}><p onClick={this.handleClickKeys}>C8</p></div>
            </section>
          </div>
          <div id="tip">
            <button id="tip-btn" ref={this.tipBtnRef} onClick={this.handleClickCollapse} value={this.state.collapse}>You can play it on your keyboard!</button>
            <div id="collapse-content" ref={this.collapseContentRef}>
              <p>With the keyboard keys <kbd>S</kbd> <kbd>D</kbd> <kbd>F</kbd> <kbd>G</kbd> <kbd>H</kbd> <kbd>J</kbd> <kbd>K</kbd> you can play the white keys of the 4ª octave.</p>
              <p> And with the keyboard keys <kbd>E</kbd> <kbd>T</kbd> <kbd>Y</kbd> <kbd>I</kbd> <kbd>O</kbd> you can play the black ones of the same octave.</p>
            </div>
          </div>
          <div id="menu">
            <div id="menu-input-group1">
              <span id="octave-label">Octave</span>
              <button id="L-btn" ref={this.LBtnRef} type="button" onClick={this.handleClickLeft}>L</button>
              <select id="Octave-select" value={this.state.selectOctave} onChange={this.handleSelect}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option selected value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <button id="R-btn" ref={this.RBtnRef} type="button" onClick={this.handleClickRight}>R</button>
              <span id="span-octave">
                <div id="switch-div">
                  <div>
                    <input id="switch-btn" type="checkbox" checked={this.state.switchValue} onChange={this.handleCheck} />
                    <label id="switch-label" for="switch-btn">Show octaves</label>
                  </div>
                </div>
              </span>
            </div>
            <div id="menu-input-group2">
              <span id="volume-icon">🔊</span>
              <div id="volume-range-div">
                <Tippy content={this.state.volume + '%'} hideOnClick={false} delay={100} followCursor={'horizontal'} plugins={[followCursor]}>
                  <input id="volume-range" value={this.state.volume} onChange={this.handleChangeVolume} type="range" />
                </Tippy>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

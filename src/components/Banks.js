import hihat1 from "./sounds/hihat1.wav";
import hihat2 from "./sounds/hihat2.wav";
import hihat3 from "./sounds/hihat3.wav";
import perc1 from "./sounds/perc1.wav";
import perc2 from "./sounds/perc2.wav";
import perc3 from "./sounds/perc3.wav";
import snare1 from "./sounds/snare1.wav";
import snare2 from "./sounds/snare2.wav";
import snare3 from "./sounds/snare3.wav";

export const bankOne = [ 
   {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Hihat 1',
    src: hihat1
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Hihat 2',
    src: hihat2
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Hihat 3',
    src: hihat3
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Perc 1',
    src: perc1
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Perc 2',
    src: perc2
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Perc 3',
    src: perc3
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Snare 1',
    src: snare1
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Snare 2',
    src: snare2
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare 3',
    src: snare3
  }  
]


// export const bankTwo = [ 
//   {
//     keyCode: 81,
//     keyTrigger: 'Q',
//     id: 'Chord-1',
//     url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
//   },
//   {
//     keyCode: 87,
//     keyTrigger: 'W',
//     id: 'Chord-2',
//     url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
//   },
//   {
//     keyCode: 69,
//     keyTrigger: 'E',
//     id: 'Chord-3',
//     url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
//   },
//   {
//     keyCode: 65,
//     keyTrigger: 'A',
//     id: 'Shaker',
//     url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
//   },
//   {
//     keyCode: 83,
//     keyTrigger: 'S',
//     id: 'Open-HH',
//     url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
//   },
//   {
//     keyCode: 68,
//     keyTrigger: 'D',
//     id: 'Closed-HH',
//     url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
//   },
//   {
//     keyCode: 90,
//     keyTrigger: 'Z',
//     id: 'Punchy-Kick',
//     url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
//   },
//   {
//     keyCode: 88,
//     keyTrigger: 'X',
//     id: 'Side-Stick',
//     url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
//   },
//   {
//     keyCode: 67,
//     keyTrigger: 'C',
//     id: 'Snare',
//     url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
//   }
// ]



export * from "./Banks";
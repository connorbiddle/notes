export class AccurateInterval {
  constructor(fn, duration) {
    let _this = this;
    this.baseline = undefined;

    this.run = function () {
      if (_this.baseline === undefined) {
        _this.baseline = new Date().getTime();
      }
      fn();
      let end = new Date().getTime();
      _this.baseline += duration;

      let nextTick = duration - (end - _this.baseline);
      if (nextTick < 0) {
        nextTick = 0;
      }

      _this.timer = setTimeout(function () {
        _this.run(end);
      }, nextTick);
    };

    this.stop = function () {
      clearTimeout(_this.timer);
    };
  }
}

export const throttle = (fn, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      fn.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Get the coordinates for the centre of a DOM node
export const getNodeCentre = domNode => {
  const { x, y, width, height } = domNode.getBoundingClientRect();
  return { x: x + width / 2, y: y + height / 2 };
};

// Convert numeric seconds value to formatted time string
export const toTimeString = seconds => {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);

  if (sec < 10) sec = `0${sec}`; // Pad zeroes

  return `${min}:${sec}`;
};

// Check if an input event is of a deletion type
export const isDeleteEvent = e => {
  return (
    e.nativeEvent.inputType === "deleteContentBackward" ||
    e.nativeEvent.inputType === "deleteContentForward" ||
    e.nativeEvent.inputType === "deleteWordBackward" ||
    e.nativeEvent.inputType === "deleteWordForward"
  );
};

// Check if the TimeInput's change is valid
export const isInvalidTimeChange = (e, type) => {
  if (type === "mins" && e.target.value.length > 2) return true;

  if (
    type === "secs" &&
    (e.target.value.length > 2 || parseInt(e.target.value) > 59)
  )
    return true;

  // nativeEvent returns appended character - not entire input value
  if (isNaN(parseInt(e.nativeEvent.data)) && !isDeleteEvent(e)) return true;
};

export const isInvalidMetronomeValue = value => {
  const tempo = parseInt(value);
  return (value !== "" && isNaN(tempo)) || tempo < 0 || tempo > 300;
};

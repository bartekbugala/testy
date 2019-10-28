try {
  if (!Array.isArray(styleNotes) || styleNotes.length !== 5) {
    throw 'styleNotes needs to be passed in an array of 5 elements';
  }
  styleNotes.forEach(el => {
    if ((parseInt(el) !== el && el - parseInt(el)) !== 0.5 || el < 0 || el > 20) {
      throw 'one of the notes has a wrong value';
    }
    if (typeof parseFloat(el) !== Number) {
      throw 'one of the notes is not a number';
    }
  });
} catch (e) {
  console.error(e);
}

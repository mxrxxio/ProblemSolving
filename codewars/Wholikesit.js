function likes(names) {
  switch (names.length) {
      case 0: return 'no one likes this'; break;
      case 1: return names[0].concat(' likes this'); break;
      case 2: return names[0].concat(` and ${names[1]} like this`); break;
      case 3: return names[0].concat(`, ${names[1]} and ${names[2]} like this`); break;
      default: return names[0].concat(`, ${names[1]} and ${names.length - 2} others like this`);
  };
};
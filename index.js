module.exports = function(cats){
  return JSON.parse(cats.replace(/\s*|\n/gm, ''));
};

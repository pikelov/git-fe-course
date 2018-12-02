export const set = (value) => {
  localStorage.setItem('url-finder', JSON.stringify(value));
};

export const get = () => {
  const data = localStorage.getItem('url-finder');

  return data ? JSON.parse(data) : null;
};

export const remove = (id) => {
  const data = JSON.parse(localStorage.getItem('url-finder'));
  const resData = data.filter(item => item.id !== id);
  localStorage.setItem('url-finder', JSON.stringify(resData));
};

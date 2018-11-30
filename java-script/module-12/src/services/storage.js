export const set = (value) => {
  localStorage.setItem('url-finder', JSON.stringify(value));
};

export const get = () => {
  const data = localStorage.getItem('url-finder');

  return data ? JSON.parse(data) : null;
};

export const remove = (id) => {
  localStorage.removeItem(id);
};

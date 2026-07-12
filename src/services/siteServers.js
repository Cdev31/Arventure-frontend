import api from '../api/axios';

export const getFeaturedSite = () => api.get('/sites/featured');
export const getRecommendedSites = () => api.get('/sites/recommended');
export const getSiteDetails = (id) => api.get(`/sites/${id}`);
export const getDestinations = () => api.get('/sites');

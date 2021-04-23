import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KcRmD_UV172UWFDMRvp-PMzcMISga5H3q4XpHSkfB40' 
    }
});
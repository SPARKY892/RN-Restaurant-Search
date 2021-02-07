import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 9w1-RvR57_6cUYvBwZ4qb22UW4XyJqHS5WAV3DVRqm_mSrMixC8J2e3ukzWtf5A-HDyRyhQbVwC9lqWvKa-X9Bj3J3x2PMXSjEtAGFSyxuuyau2DeaGodd3JF_wfYHYx'
    }
});
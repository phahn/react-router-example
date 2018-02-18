import axios from 'axios';
import { stringify } from "query-string";

function sleeper(ms) {
    return function (x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}

export function getReportData(filter) {
    const search = {
        orderBy: 'part',
        orderDir: 'ASC',
        page: 1,
        size: 10,
        partFilter: filter.PART
    }
    const searchString = stringify(search);
    return axios.get(`/api?${searchString}`).then(sleeper(1000));
}
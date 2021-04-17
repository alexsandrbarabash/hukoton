import CommonService from './common-service';

export default class GroupService extends CommonService {
    constructor() {
        super('/api/groups');
    }

    async createNewGroup({institutionID, name}) {
        try {
            const res = await this._baseAPI.post('/', {
                institutionID, name,
            });

            return res.data;
        } catch (e) {
            throw new Error(e);
        }
    }

    async getGroupsByInstitutionID(iid) {
        try {
            const res = await this._baseAPI.get('/' + iid);

            return res.data.groups;
        } catch (e) {
            throw new Error(e);
        }
    }

    async deleteGroup(gid) {
        try {
            const res = await this._baseAPI.delete('/' + gid);

            return res.data;
        } catch (e) {
            throw new Error(e);
        }
    }
}
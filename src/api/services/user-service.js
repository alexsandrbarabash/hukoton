import { CommonService } from './common-service';

export default class UserService extends CommonService {
    constructor() {
        super('/api/users');
    }

    async login({username, password}) {
        try {
            const res = await this._baseAPI.post('/login', {
                username,
                password,
            });

            return res.data;
        } catch (e) {
            throw new Error(e);
        }
    }

    async signup(body) {
        const {
                  username,
                  email,
                  password,
                  institutionName,
                  firstName,
                  lastName,
              } = body;

        try {
            const res = await this._baseAPI.post('/signup', {
                username,
                email,
                password,
                institutionName,
                firstName,
                lastName,
            });

            return res.data;
        } catch (e) {
            throw new Error(e);
        }
    }

    async createEducator({firstName, lastName, institutionID}) {
        try {
            const res = await this._baseAPI.post('/educator', {
                firstName,
                lastName,
                institutionID,
            });

            return res.data;
        } catch (e) {
            throw new Error(e);
        }
    }

    async createStudent({firstName, lastName, groupID}) {
        try {
            const res = await this._baseAPI.post('/student', {
                firstName,
                lastName,
                groupID,
            });

            return res.data;
        } catch (e) {
            throw new Error(e);
        }
    }

    async getStudentsByInstitutionID(iid) {
        try {
            const res = await this._baseAPI.get('/student/' + iid);

            return res.data.students;
        } catch (e) {
            throw new Error(e);
        }
    }

    async getEducatorsByInstitutionID(iid) {
        try {
            const res = await this._baseAPI.get('/educator/' + iid);

            return res.data.educators;
        } catch (e) {
            throw new Error(e);
        }
    }

    async deleteEducator(eid) {
        try {
            const res = await this._baseAPI.delete('/educator/' + eid);

            return res.data;
        } catch (e) {
            throw new Error(e);
        }
    }

    async deleteStudent(sid) {
        try {
            const res = await this._baseAPI.delete('/student/' + sid);

            return res.data;
        } catch (e) {
            throw new Error(e);
        }
    }
}
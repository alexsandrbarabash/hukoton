import CommonService from './common-service';

export default class ScheduleService extends CommonService {
  constructor() {
    super('/api/schedule');
  }

  async createNewSchedule(body) {
    const {day, order, subject, groupID, educatorID} = body;

    try {
      const res = await this._baseAPI.post('/', {
        day,
        order,
        subject,
        groupID,
        educatorID,
      });

      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async createNewGrade(body) {
    const {scheduleCellId, grade, studentID, educatorID} = body;

    try {
      const res = await this._baseAPI.post('/grade', {
        scheduleCellId,
        grade,
        studentID,
        educatorID,
      });

      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async createNewHomework(body) {
    const {scheduleCellId, description, studentID, educatorID} = body;

    try {
      const res = await this._baseAPI.post('/homework', {
        scheduleCellId,
        description,
        studentID,
        educatorID,
      });

      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async getWeekScheduleByWeekNo(uid, date) {
    try {
      const res = await this._baseAPI.get(`/${uid}/${date}`);

      return res.data.schedule;
    } catch (e) {
      throw new Error(e);
    }
  };

}
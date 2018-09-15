import HeartRateZone from "./HeartRateZone";

export default class UserInformation {
    public username: string;
    public zone_records: HeartRateZone[];
    public resting_hr: number;

    constructor(username: string, zone_records: HeartRateZone[], resting_hr: number) {
        this.username = username;
        this.zone_records = zone_records;
        this.resting_hr = resting_hr;
    }

}
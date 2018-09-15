
export default class HeartRate {
    private username: string;
    private heart_rate: number;
    private start_time: number;
    private end_time: number;

    constructor(username: string, heart_rate: number) {
        this.username = username;
        this.heart_rate = heart_rate;
    }
}
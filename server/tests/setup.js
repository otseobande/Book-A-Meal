import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';
import assert from 'assert';
import App from "../app";

chai.use(chaiHttp);
chai.use(sinonChai);
chai.should();

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUyMGFjMjU3LTg2Y2MtNGE2Zi1hNjE5LTAyNDlhMjAxYzQ3NSIsInJvbGUiOiJjYXRlcmVyIiwiaWF0IjoxNTI2NDgwNzk0fQ.6dP8OUAa6KKcvwZSHXl_Qoi6zHRW1cJvgybJ8t4m0E4";

export {
	chai,
	assert,
	sinon,
	mockReq,
	mockRes,
	App,
	token
}

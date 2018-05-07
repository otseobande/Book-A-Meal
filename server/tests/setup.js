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

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsInJvbGUiOiJjYXRlcmVyIiwiaWF0IjoxNTI1NjI4MTQ4fQ.r939YKrMx3xWWjnles86x5ACI5ytwyJh3TpKWQsmFIk";
export {
	chai,
	assert,
	sinon,
	mockReq,
	mockRes,
	App,
	token
}

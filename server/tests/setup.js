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

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IlphcHBhIEJhbGFtaSIsInVzZXJuYW1lIjoiemFwcGEiLCJlbWFpbCI6InphcHBhYmFsYW1pQGdtYWlsLmNvbSIsInJvbGUiOiJjYXRlcmVyIiwiaWF0IjoxNTI1MzA4NTk1fQ.0yl7_Soe-lfeBFNxwh024SQXHXdF4GWhX6R05eYVmnk"

export {
	chai,
	assert,
	sinon,
	mockReq,
	mockRes,
	App,
	token
}

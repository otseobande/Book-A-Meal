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

const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUyMGFjMjU3LTg2Y2MtNGE2Zi1hNjE5LTAyNDlhMjAxYzQ3NSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTUyNjk0NTI1MX0.sWTsGyZusSrsANFsOGHsLGprPK4IJkx8A-MJiElAJ6U";
const catererToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZhNTZjOWU3LWU1ZjQtNDA4Ni1iN2U5LWRiNTgxMjAxYjcxZiIsInJvbGUiOiJjYXRlcmVyIiwiaWF0IjoxNTI2OTQ1Mzc1fQ.0X-IUGwnOkfjD-S6rPz3VuGCwrIj-SRsUYtitT7mSV0";
const customerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJhOGUxZmQzLTkyNmYtNDRjOS1hN2IzLTIxOGFlZGFiOGMxMiIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTUyNjc2NjA1NX0.samXzEmS5Hst3fMsVAO_qMvaFfzwc-BygOnpuBFPr0I";
export {
	chai,
	assert,
	sinon,
	mockReq,
	mockRes,
	App,
	adminToken,
	catererToken,
	customerToken
}

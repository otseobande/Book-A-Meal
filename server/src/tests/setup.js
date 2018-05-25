import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import jwt from "jsonwebtoken";
import { mockReq, mockRes } from 'sinon-express-mock';
import assert from 'assert';
import App from "../app";


chai.use(chaiHttp);
chai.use(sinonChai);
chai.should();

const adminToken = jwt.sign({
  id: 'e20ac257-86cc-4a6f-a619-0249a201c475',
  role: 'admin'
}, process.env.JWT_SECRET, { expiresIn: '1h'});

const catererToken = jwt.sign({
  id: 'fa56c9e7-e5f4-4086-b7e9-db581201b71f',
  role: 'caterer'
}, process.env.JWT_SECRET, { expiresIn: '1h'});

const customerToken = jwt.sign({
  id: 'ba8e1fd3-926f-44c9-a7b3-218aedab8c12',
  role: 'customer'
}, process.env.JWT_SECRET, { expiresIn: '1h'});

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

import express from 'express';
import parcelController from '../controllers/parcelController';
import checkParcelValidation from '../middlewares/checkParcelValidation';
import idValidation from '../middlewares/idValidation';
import Auth from '../middlewares/auth';

const parcelRoute = express();

parcelRoute.route('/parcels')
.get( Auth.verifyToken, parcelController.getAllParcels)
.post(Auth.verifyToken, checkParcelValidation.createParcelValidation,
     parcelController.addParcels);

parcelRoute.route('/parcels/:parcelId')
.get(Auth.verifyToken, idValidation.parcelId, parcelController.getAParcels);

parcelRoute.route('/parcels/:parcelId/cancel')
.put(Auth.verifyToken, idValidation.parcelId, parcelController.cancelParcel);

parcelRoute.route('/parcels/:parcelId/status')
.put(Auth.verifyToken, idValidation.parcelId, parcelController.changeStatus);

parcelRoute.route('/parcels/:parcelId/presentLocation')
.put(Auth.verifyToken, idValidation.parcelId, parcelController.presentLocation);

parcelRoute.route('/parcels/:parcelId/destination')
.put(Auth.verifyToken, idValidation.parcelId, parcelController.destination);

export default parcelRoute;


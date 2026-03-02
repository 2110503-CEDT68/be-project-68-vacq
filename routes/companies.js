const express = require('express');
const {
  getCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanyUsers
} = require('../controllers/companies');

// Include other resource routers
const interviewRouter = require('./interviews');

const { protect, authorize } = require('../middleware/auth');
const router = express.Router();

// Re-route into other resource routers
router.use('/:companyId/interviews', interviewRouter);

router
  .route('/')
  .get(getCompanies)
  .post(protect, authorize('admin'), createCompany);

router
  .route('/:id')
  .get(getCompany)
  .put(protect, authorize('admin'), updateCompany)
  .delete(protect, authorize('admin'), deleteCompany);

//addition function
router
  .get('/:companyId/users', protect, authorize('admin'), getCompanyUsers);
  
  

module.exports = router;

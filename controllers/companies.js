
//Addition Function --Get All User For ONE Company
exports.getCompanyUsers = async (req, res, next) => {
try {
  const interviews = await Interview.find({
    company: req.params.companyId
  }).populate({
    path: 'user',
    select: 'name email tel'
  });

  const users = interviews.map(interview => interview.user);

  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });

} catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Cannot get users for this company'
    });
  }
};
const healthCheck = (req, res) => {
  return res.status(200).json({
    is_success: true,
    official_email: "mitanshu1398.be23@chitkara.edu.in"
  });
};

export default healthCheck;
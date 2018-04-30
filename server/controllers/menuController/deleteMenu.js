import menus from '../../dummy-models/menus';

const deleteMenu = (req, res) => {
  const { date } = req.params;

  const deleted = menus.delete(menu => (new Date(date)).getTime()
                              === (new Date(menu.date)).getTime());

  if (deleted) {
    return res.status(202).json({
      status: 'success',
      message: 'menu deleted successfully'
    });
  }

  return res.status(404).json({
    status: 'error',
    message: 'menu not found'
  });
};

export default deleteMenu;

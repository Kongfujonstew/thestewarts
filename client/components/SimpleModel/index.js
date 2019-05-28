import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const buttonStyles = color => ({
  background: color === 'red'
    ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: color === 'red'
    ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
    : '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: '8px 8px 8px 0'
});

class SimpleModel extends React.Component {
  constructor(props) {
    super(props);
    const { model: { fields }, items } = this.props;
    this.emptyState = fields.reduce((accum, field) => ({...accum, [field]: ''}), {});
    this.state = { ...this.emptyState, breakdown: null, itemToDelete: null, itemToUpdate: null };
    this.removeSs = (string) => {
      const rx = new RegExp('(es|s)$');
      return string.replace(rx, '');
    }
    this.typeCoerceIfNumber = value => {
      const isNumber = value && value.length && !isNaN(Number(value));
      return isNumber ? Number(value) : value;
    }
  }


  handleCreate = async() => {
    const { enqueueSnackbar, reload, model: { create, fields } } = this.props;
    const newItem = fields.reduce((accum, field) => ({...accum, [field]: this.typeCoerceIfNumber(this.state[field])}), {});
    const success = await create(newItem);
    if (!success) {
      enqueueSnackbar('createFail!', { variant: 'warning' });
    } else {
      reload();
      this.setState({ ...this.emptyState });
      enqueueSnackbar('create success!', { variant: 'success' });
    }
  }

  handleUpdate = id => async() => {
    const { enqueueSnackbar, reload, model: { updateById, name, fields } } = this.props;
    const gqlName = this.removeSs(name);
    const updatedItem = fields.reduce((accum, field) => ({...accum, [field]: this.typeCoerceIfNumber(this.state[field])}), {});

    const success = await updateById(id, updatedItem);
    if (!success) {
      enqueueSnackbar('updateFail!', { variant: 'warning' });
    } else {
      reload();
      this.setState({...this.emptyState, itemToUpdate: null});
      enqueueSnackbar('Update success!', { variant: 'success' });
    }
  }

  handleDelete = id => async() => {
    const { enqueueSnackbar, reload, model: { deleteById } } = this.props;
    const success = await deleteById(id);
    if (!success) {
      enqueueSnackbar('deleteFail!', { variant: 'warning' });
    } else {
      reload();
      this.setState({...this.emptyState, itemToDelete: null});
      enqueueSnackbar('Delete success!', { variant: 'success' });
    }
  }

  //used for both create and update (uses model-defined fields to render lines/fields)
  handleFieldInput= field => e => {
    const { value } = e.target;
    const isNumber = !isNaN(Number(value));
    const shouldTypeCoerce = isNumber && field.includes('id');
    this.setState({ [field]: shouldTypeCoerce ? Number(value) : value });
  }

  // on create only
  handleKeyPress = e => {
    if (e.key === 'Enter') this.handleCreate();
  }

  handleClickOpenBreakdown = breakdown => () => {
    //breakdown is created by calling the breakdownFunc from the model
    this.setState({ breakdown });
  }

  handleClickOpenUpdate = item => () => {
    console.log('click open update');
    const { model: { fields }, items } = this.props;
    const updateItemState = fields.reduce((accum, field) => ({...accum, [field]: item[field]}), {});
    this.setState({ ...updateItemState, itemToUpdate: item });
  }

  handleClickOpenDelete = item => () => {
    console.log('click open delete, ', item);
    this.setState({ itemToDelete: item });
  }

  renderLine = (item, field) =>
    <Typography key={field}>{field}: {JSON.stringify(item[field])}</Typography>

  // Used for create and reused in update modal
  renderField = (field, dontShowCreateFieldValues) => {
    const value = typeof this.state[field] === 'object' ? JSON.stringify(this.state[field]) : this.state[field];
    return (
      <TextField
        key={field}
        style={{ margin: '0 4px 4px 0' }}
        variant="outlined"
        label={field.charAt(0).toUpperCase() + field.slice(1)}
        value={dontShowCreateFieldValues ? '' : value}
        onChange={this.handleFieldInput(field)}
        onKeyPress={this.handleKeyPress}
      />
    );
  }

  renderExistingItem = item => {
    const { fields, breakdowns=[] } = this.props.model;
    const showFields = ['id'].concat(fields);

    return (
      <div key={JSON.stringify(item)} style={{ marginBottom: '16px' }}>
        {showFields.map(field => this.renderLine(item, field))}
        <Button style={buttonStyles('blue')} onClick={this.handleClickOpenUpdate(item)}>{'Update'}</Button>
        <Button style={buttonStyles('red')} onClick={this.handleClickOpenDelete(item)}>{'Delete'}</Button>
        {breakdowns.map(breakdownFunc => {
          const breakdown = breakdownFunc(item, this.props);

          return (
            <Button
              key={'open-breakdown-btn-' + breakdown.name}
              style={{...buttonStyles('blue'), display: 'block' }}
              onClick={this.handleClickOpenBreakdown(breakdown)}
            >{breakdown.name}</Button>
          );
        })}
      </div>
    );
  }

  breakdownDialog = breakdown => {
    const isOpen = !!breakdown;
    // name and items are required
    const { name, items } = breakdown;
    const cancel = () => this.setState({ breakdown: null });

    return (
      <Dialog open={isOpen}>
        <DialogTitle>{ name }</DialogTitle>
        {items.map(item => Object.keys(item).map(field => this.renderLine(item, field)))}
        <Button style={buttonStyles('red')} onClick={cancel}>Close</Button>
      </Dialog>
    )
  }

  deleteDialog = item => {
    const isOpen = !!this.state.itemToDelete;
    const cancel = () => this.setState({ itemToDelete: null });
    const { fields } = this.props.model;
    const showFields = ['id'].concat(fields);
    // { showFields.map(field => <Typography key={field}>{field}: {JSON.stringify(item[field])}</Typography> ) }

    return (
      <Dialog open={isOpen}>
        <DialogTitle>Delete {this.props.model.name.slice(0, -1)}</DialogTitle>
        <Button style={buttonStyles('red')} onClick={cancel}>Cancel</Button>
        <Button style={buttonStyles('red')} onClick={this.handleDelete(item.id)}>Delete</Button>
      </Dialog>
    );
  }

  updateDialog = item => {
    const { model: { fields, name } } = this.props;
    const isOpen = !!this.state.itemToUpdate;
    const cancel = () => this.setState({...this.emptyState, itemToUpdate: null });

    return (
      <Dialog open={isOpen}>
        <DialogTitle>Update {this.removeSs(name)} id: {item.id}</DialogTitle>
        {fields.map(field => this.renderField(field))}
        <Button style={buttonStyles('red')} onClick={cancel}>Cancel</Button>
        <Button style={buttonStyles('red')} onClick={this.handleUpdate(item.id)}>Update</Button>
      </Dialog>
    );
  }

  render() {
    const { model: { fields, name, singular }, items } = this.props;
    const { breakdown, itemToUpdate, itemToDelete } = this.state;
    const dontShowCreateFieldValues = Boolean(itemToDelete || itemToUpdate);

    return (
      <Paper style={{ padding: '16px', marginBottom: '32px' }}>
        <Typography variant="h4" style={{ marginBottom: '16px' }} align="center">{name[0].toUpperCase() + name.slice(1)}</Typography>
        {items.sort((a, b) => a.id - b.id).map(item => this.renderExistingItem(item))}
        {items.length ? <Divider /> : null}
        <Typography variant="h5" style={{ margin: '16px 0' }}>Create</Typography>
        {fields.map(field => this.renderField(field, dontShowCreateFieldValues))}
        <Button style={{...buttonStyles('blue'), display: 'block' }} onClick={this.handleCreate}>{'Create ' + `${singular || this.removeSs(name)}`}</Button>
        { breakdown && this.breakdownDialog(breakdown) }
        { itemToUpdate && this.updateDialog({...itemToUpdate}) }
        { itemToDelete && this.deleteDialog({...itemToDelete}) }
      </Paper>
    );
  }
}

export default SimpleModel;

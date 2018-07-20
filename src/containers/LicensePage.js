import React,{Component} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';


const styles = {
  toggleDiv: {
    maxWidth: 300,
    marginTop: 40,
    marginBottom: 5
  },
  toggleLabel: {
    color: grey400,
    fontWeight: 100
  },
  buttons: {
    marginTop: 30,
    float: 'right'
  },
  saveButton: {
    marginLeft: 5
  }
};



class License extends Component {
  
  render(){  
  
      
    this.handleChange = (event, index, value) => this.setState({value})
    return (
      <PageBase title="Gerador de Licença"
                navigation="Application / Licença">
        <form>

          <SelectField
            floatingLabelText="Tipo de Licença"
            value={1}
            onChange={this.handleChange}
            >
            <MenuItem key={0} primaryText="iDSecure Pro"/>
            <MenuItem key={1} primaryText="iDSecure Enterprise"/>
            <MenuItem key={2} primaryText="iDFlex Pro"/>
            <MenuItem key={3} primaryText="iDFlex Enterprise"/>
          </SelectField>


          <TextField
            hintText="Serial"
            floatingLabelText="Serial"
            fullWidth={true}
          />

          <TextField
            hintText="Nome da Empresa"
            floatingLabelText="Nome da Empresa"
            fullWidth={true}
          />

          <TextField
            hintText="Nome do Vendedor"
            floatingLabelText="Nome do Vendedor"
            fullWidth={true}
          />

          <DatePicker
            hintText="Data"
            floatingLabelText="Data"
            fullWidth={true}/>

        

          <div style={styles.buttons}>
            <Link to="/">
              <RaisedButton label="Limpar"/>
            </Link>

            <RaisedButton label="Salvar"
                          style={styles.saveButton}
                          type="submit"
                          primary={true}/>
          </div>
        </form>
      </PageBase>
    );
  }
}

export default License;

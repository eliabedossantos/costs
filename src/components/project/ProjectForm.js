import './modules/ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';

function ProjectForm(){
    return(
        <form>
            <Input type="text" text="Nome do Projeto" name="projectName" placeholder="Insira o nome do projeto" />
            <Input type="number" text="Orçamento total" name="totalValue" placeholder="Insira o total do projeto" />
            <Select text="Selecione a categoria" name="category" options={['Categoria 1', 'Categoria 2', 'Categoria 3']} />
            
        </form>
    );
}

export default ProjectForm;
import './modules/ProjectForm.module.css';
function ProjectForm(){
    return(
        <form>
            <div className="form-group">
                <label htmlFor="projectName">Nome do Projeto</label>
                <input type="text" className="form-control" id="projectName" placeholder="Insira o nome do Projeto" required />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="valueTotal">Orçamento total</label>
                <input type="number" className="form-control" id="valueTotal" placeholder="Insira o total do projeto" required />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="categoryProject">Categoria do projeto</label>
                <select className="form-control" id="categoryProject" required name='categoryProject'>
                    <option disabled>Selecione a categoria</option>
                </select>
            </div>
            
        </form>
    );
}

export default ProjectForm;
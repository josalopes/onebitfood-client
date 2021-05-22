import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Spinner, isLoading, isError, Col } from 'react-bootstrap';

import Category from './Category';
import getCategories from '../../services/getCategories';
import slickSettings from './slick.settings';

export default function Categories() {
  const { categories, isLoading, isError } = getCategories();

  function renderContent() {
    if (isError)
      return <Col><Alert variant='custom-red'>Erro ao carregar</Alert></Col>
    else if (isLoading)
      return <Col><Spinner animation='border'/></Col>
    else if (categories.length == 0)  
      return <Col>Nenhuma categoria disponível ainda...</Col>
    else
    return <Card className='mt-2'>
              <Slider {...slickSettings} className='px-4 pt-4 text-center'>
                {categories.map((category, i) => <Category {...category} key={i}/>)}
              </Slider>
            </Card>
  }

  return (
    <>
      <h3 className='fw-bold'>Categorias</h3>
      {renderContent()}
    </>
  )
}
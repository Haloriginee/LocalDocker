import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { Header } from 'components'
import React from 'react'
import type { Route } from './+types/create-trip';

export const loader = async () => {

  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flag,latlng,maps'");
  const data = await response.json()


  return data.map((country: any) => ({

    name: country.flag + country.name.common,
    coordinates: country.latlng,
    value: country.name.common,
    openStreetMap: country.maps?.openStreetMap,

  }))
}

const CreateTrip = ({loaderData}: Route.ComponentProps) => {

  const handleSubmit = async () => {};

  const countries = loaderData as Country[];
  //console.log(countries);



  return (

    <main className='flex flex-col gap-10 pb-20 wrapper'>
      <Header
        title='Add a New Trip'
        description='View and Edit AI-generated Travel plans'
      />

      <section className='mt-2.5 wrapper-md'>
        <form
          className='trip-form'
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="country">
              Country
            </label>
            <ComboBoxComponent
              id="country"
              dataSource={countries}
              fields={{ text: 'text', value: 'value' }}
              placeholder='Select a Destination'
              className='combo-box'
            />
          </div>
        </form>
      </section>

    </main>

  )
}

export default CreateTrip

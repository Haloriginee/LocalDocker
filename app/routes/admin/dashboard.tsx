import { StatsCard, TripCard } from 'components'
import Header from 'components/Header'
import React from 'react'
import { getUser } from '~/appwrite/auth';
import { dashboardStats, user, allTrips } from '~/constants';
import type { Route } from "./+types/dashboard"
import { getUsersAndTripsStats } from '~/appwrite/dashboard';

const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } = dashboardStats;

export const clientLoader = async () => {

  const [user, dashboardStats] = await Promise.all([

    getUser(),
    getUsersAndTripsStats()

  ])

  return {

    user, dashboardStats

  }

};

const dashboard = ({ loaderData }:  Route.ComponentProps) => {

  const user = loaderData.user as User | null;
  const { dashboardStats } = loaderData;

  return (

    <main className='dashboard wrapper'>
      <Header
        title={`Welcome, ${user?.name ?? "Guest"}✈️`}
        description="Track activity, trends and popular destinations"
      />

      <section className='flex flex-col gap-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>

          <StatsCard
            headerTitle="Total Users"
            total={dashboardStats.totalUsers}
            currentMonthCount={dashboardStats.usersJoined.currentMonth}
            lastMonthCount={dashboardStats.usersJoined.lastMonth}
          />

          <StatsCard
            headerTitle="Total Trips"
            total={dashboardStats.totalTrips}
            currentMonthCount={dashboardStats.tripsCreated.currentMonth}
            lastMonthCount={dashboardStats.tripsCreated.lastMonth}
          />

          <StatsCard
            headerTitle="Active Users"
            total={dashboardStats.userRole.total}
            currentMonthCount={dashboardStats.userRole.currentMonth}
            lastMonthCount={dashboardStats.userRole.lastMonth}
          />

        </div>
      </section>

      <section className='container'>

        <h1 className='text-xl font-semibold text-dark-100'>
          Created Trips
        </h1>
        <div className='trip-grid'>
          {allTrips.slice(0, 4).map(({ id, name, imageUrls, itinerary, estimatedPrice, tags }) => (

            <TripCard
              key={id}
              id={id.toString()}
              name={name}
              imageUrl={imageUrls[0]}
              location={itinerary?.[0]?.location ?? ""}
              tags={tags}
              price={estimatedPrice}
            />

          ))}
        </div>

      </section>


    </main>

  )
}

export default dashboard

# TransitOps

**Real-time fleet operations management for logistics companies — from dispatch to delivery.**

## Problem

Logistics companies struggle to track vehicles, drivers, and trips in real time, leading to double-bookings, license violations, and poor maintenance tracking. Fleet managers feel this pain most directly.

## Target User

A fleet manager at a logistics company who needs to assign drivers and vehicles to trips, track their status live, and stay compliant with maintenance and license rules — without relying on manual spreadsheets.

## Core Features

- Vehicle registration (unique registration number)
- Driver registration and license tracking
- Trip creation and dispatch
- Real-time trip status tracking (dispatched → in-transit → completed)
- Fuel log entry per trip
- Maintenance record per vehicle
- Prevents double-assignment of driver/vehicle to overlapping trips
- Blocks assignment if driver's license is expired
- Cargo weight vs. vehicle capacity validation

## Nice to Have (Future Scope)

- Expense management module
- Reports & analytics dashboard
- Role-based access (Fleet Manager, Driver, Safety Officer, Financial Analyst)

## Out of Scope

- Payment processing
- Mobile driver app
- GPS/live location tracking (status is simulated, not actual geolocation)

## Tech Stack

- Frontend: React + Vite
- Data Layer: *(to be finalized — Firebase/Supabase)*

## Team

Built for the Odoo Hackathon 2026.

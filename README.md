# Stale useParams Values in Conditionally Rendered Components (React Router v6)

This repository demonstrates a bug in React Router v6 where the `useParams` hook doesn't update correctly when used within a conditionally rendered component that's unmounted and remounted.  This can lead to stale parameter values being displayed, causing unexpected behavior in the application.

## Bug Description

The issue arises when a component using `useParams` is conditionally rendered. If the component unmounts and remounts due to a route change or other conditional logic, the `useParams` hook might retain its previous values instead of reflecting the current route parameters.  This is especially noticeable when navigating between routes with similar path structures.

## Solution

The solution involves using the `useLocation` hook to directly access route information and combine it with route matching logic to ensure the component always has the correct parameter values.  This bypasses the potential issue of stale values in `useParams` when the component is conditionally rendered and remounted.
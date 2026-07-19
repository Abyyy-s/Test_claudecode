# Accessibility Standards

## Purpose

Accessibility is a core requirement.

Every interface should be usable regardless of ability, device, input method, or assistive technology.

Accessibility is not an optional enhancement.

It is a design and engineering requirement.

---

# Philosophy

Good accessibility improves usability for everyone.

Design for:

- Keyboard users
- Screen readers
- Low vision
- Color blindness
- Reduced motion
- Mobile users
- Elderly users
- Temporary impairments

Accessibility should be invisible when done correctly.

---

# Semantic HTML

Always prefer semantic HTML.

Use:

<header>

<nav>

<main>

<section>

<article>

<aside>

<footer>

<form>

<label>

<button>

Never replace semantic elements with generic divs unless absolutely necessary.

---

# Keyboard Navigation

Every interactive element must be reachable using the keyboard.

Users should never become trapped.

Support:

Tab

Shift + Tab

Enter

Space

Escape

Arrow Keys

Where appropriate.

---

# Focus Management

Every interactive element must have a visible focus state.

Never remove outlines without replacing them.

Dialogs should:

Move focus inside when opened.

Return focus when closed.

---

# Screen Readers

Every meaningful element should be understandable.

Use:

aria-label

aria-labelledby

aria-describedby

Only when semantic HTML is insufficient.

Avoid unnecessary ARIA.

Native HTML is preferred.

---

# Forms

Every field must include:

Visible label

Helpful placeholder (optional)

Validation message

Error message

Success feedback

Never rely on placeholder text as the only label.

---

# Buttons

Buttons must describe their action.

Avoid:

"Click Here"

"Submit"

Prefer:

"Create Account"

"Download PDF"

"Save Changes"

---

# Links

Link text should explain destination.

Avoid:

"Read More"

"Click Here"

Prefer:

"Read our pricing guide"

"View documentation"

---

# Images

Every informative image needs alt text.

Decorative images should use:

alt=""

Do not describe decorative visuals.

---

# Icons

Icons alone should not communicate meaning.

Pair icons with:

Text

Tooltip

Accessible labels

---

# Color

Never rely only on color.

Status indicators should include:

Icons

Text

Patterns

Labels

Support users with color vision deficiencies.

---

# Contrast

Maintain strong contrast.

Text should remain readable in:

Light mode

Dark mode

High brightness

Low brightness

---

# Motion

Respect:

prefers-reduced-motion

Disable:

Parallax

Large transitions

Continuous movement

Video scrubbing

Replace with:

Simple fades

Instant transitions

Static layouts

---

# Animations

Animations must never:

Hide important information.

Delay interaction.

Prevent navigation.

Reduce usability.

Motion should assist—not obstruct.

---

# Touch Targets

Interactive elements should be easy to tap.

Provide generous spacing.

Avoid tiny controls.

---

# Responsive Accessibility

Accessibility must remain excellent across:

Phones

Tablets

Desktop

Ultra-wide monitors

Zoomed interfaces

---

# Tables

Use proper:

<thead>

<tbody>

<th>

Caption when necessary.

Avoid using tables for layout.

---

# Dialogs

Dialogs should:

Trap focus.

Support Escape.

Restore focus.

Prevent background interaction.

Announce themselves to screen readers.

---

# Navigation

Navigation should:

Be predictable.

Remain consistent.

Support keyboard users.

Provide skip-to-content links when appropriate.

---

# Error Messages

Errors should:

Explain what happened.

Explain how to fix it.

Remain visible.

Be announced to assistive technologies.

Never rely solely on red text.

---

# Loading States

Provide meaningful feedback.

Skeletons

Progress indicators

Loading text

Avoid unexplained waiting.

---

# Accessibility Testing

Before shipping verify:

✓ Keyboard only

✓ Screen reader

✓ Focus order

✓ Color contrast

✓ Reduced motion

✓ Form validation

✓ Responsive layouts

✓ Error states

✓ Success states

---

# Golden Rule

Every user deserves the same quality experience.

Accessibility is not a feature.

It is part of quality.
# Motion & Animation Philosophy

## Purpose

Motion is communication.

Every animation should guide the user, reinforce hierarchy, explain relationships, or create delight.

Motion should never exist simply because animation is possible.

The objective is to make interfaces feel alive—not distracting.

---

# Core Principles

Motion should be:

Purposeful

Elegant

Smooth

Intentional

Natural

Responsive

Accessible

Consistent

Performance-friendly

Never chaotic.

---

# Motion Hierarchy

Not every element deserves animation.

Highest Priority

- Hero content
- Primary CTA
- Navigation transitions
- Important state changes

Medium Priority

- Cards
- Images
- Icons
- Feature highlights

Lowest Priority

- Decorative shapes
- Background objects
- Dividers

Avoid animating everything equally.

Motion should reinforce importance.

---

# Why Things Move

Every animation should answer one question.

Why is this moving?

Acceptable reasons:

Reveal information

Guide attention

Provide feedback

Indicate hierarchy

Communicate state

Support storytelling

Increase perceived quality

If none apply,

Do not animate it.

---

# Motion Should Feel

Elegant

Heavy

Premium

Confident

Deliberate

Fluid

Organic

Responsive

Cinematic when appropriate.

Avoid motion that feels:

Cheap

Playful without reason

Chaotic

Hyperactive

Random

Excessive

---

# Motion Rhythm

Interfaces should have rhythm.

Fast actions

Hover

Button press

Toggle

Checkbox

Small transitions

Medium actions

Cards

Modals

Dropdowns

Sidebars

Page transitions

Large actions

Hero reveals

Scroll storytelling

Pinned sections

Product showcases

Timeline animations

The larger the visual impact,

the slower and more intentional the motion.

---

# Motion Density

Do not animate every section.

Use moments of stillness.

Stillness makes animation meaningful.

A calm page with one exceptional animation feels more premium than twenty competing animations.

---

# Scroll Philosophy

Scrolling is storytelling.

Every scroll should reveal the next idea.

Avoid long pages where every section behaves identically.

Instead,

vary the rhythm.

Reveal

Pause

Explain

Reveal

Focus

Transition

Continue

---

# Micro Interactions

Micro interactions should feel immediate.

Examples

Hover

Focus

Click

Success

Loading

Selection

Expansion

Collapse

These interactions should reassure users that the interface is responsive.

---

# Macro Animations

Large animations should support storytelling.

Examples

Product showcases

Landing pages

Pinned sections

Scene transitions

Feature walkthroughs

Video synchronization

These should occur sparingly.

---

# Timing

Fast feedback

100–200ms

Standard transitions

200–400ms

Major transitions

400–800ms

Narrative sequences

800ms+

Never intentionally slow down the interface.

---

# Easing

Prefer easing that feels physical.

Avoid robotic linear movement.

Movement should accelerate and decelerate naturally.

---

# Layered Motion

Animate depth.

Foreground

Midground

Background

Use different speeds.

Create depth without overwhelming the user.

---

# Anticipation

Before important movement,

consider subtle anticipation.

Small scale

Small offset

Small opacity change

Then perform the primary motion.

This makes interactions feel more natural.

---

# Follow Through

Motion should finish naturally.

Avoid abrupt stops.

Allow elements to settle into place.

---

# Shared Motion

Maintain continuity.

If an element changes state,

its movement should preserve identity.

Avoid teleporting UI.

---

# Scroll Storytelling

For storytelling experiences,

allow scrolling to control progression.

Possible techniques

Pinned sections

Parallax

Image sequences

Video scrubbing

Timeline reveals

Layer transitions

Narrative scenes

Every scene should advance the story.

---

# Cinematic Motion

When creating premium experiences,

prioritize

Scale

Depth

Lighting

Layering

Perspective

Large imagery

Generous spacing

Minimal UI

Subtle camera-like movement

Do not imitate films.

Borrow cinematic pacing.

---

# Motion Restraint

The most professional interfaces are often the least animated.

Animation should be memorable because it is rare.

Not because it is everywhere.

---

# Accessibility

Always respect

prefers-reduced-motion

Users requesting reduced motion should receive:

No parallax

No scroll hijacking

No excessive movement

Simple fades

Instant state changes

Functionality must remain identical.

---

# Performance

Prefer GPU accelerated properties.

Animate:

transform

opacity

Avoid animating:

width

height

top

left

filter (unless necessary)

box-shadow (continuous animation)

Large layout shifts

Maintain smooth frame rates.

---

# Final Rule

Users should remember

the product,

not the animation.

Motion is successful when users barely notice it—

yet the interface feels significantly better because of it.
# Frontend Architecture Standards

## Purpose

This document defines the preferred project architecture for modern frontend applications.

The objective is to build projects that remain easy to understand, maintain, extend, and scale over time.

Architecture should reduce complexity—not create it.

---

# Core Principles

Every project should prioritize:

- Simplicity
- Separation of concerns
- Reusability
- Scalability
- Readability
- Predictability
- Performance

Avoid clever code.

Prefer obvious code.

---

# Folder Structure

Preferred structure:

app/

components/

components/ui/

components/layout/

components/sections/

hooks/

lib/

utils/

services/

types/

styles/

public/

constants/

config/

assets/

---

# App Router

Prefer Next.js App Router.

Use:

Server Components

by default.

Only use

"use client"

when interactivity is required.

Avoid unnecessary Client Components.

---

# Component Philosophy

Every component should have a single responsibility.

Bad

Huge component

1000+ lines

Many unrelated responsibilities

Good

Small focused components

Composable

Reusable

Easy to understand

---

# Component Categories

UI Components

Buttons

Inputs

Cards

Badges

Dialogs

Tables

Reusable everywhere.

---

Layout Components

Navbar

Footer

Sidebar

Containers

Section wrappers

---

Feature Components

Dashboard

Pricing

Testimonials

Hero

Contact Form

Timeline

Specific to one feature.

---

# File Size

Target

100–250 lines

Maximum

~400 lines

If larger

Split the component.

---

# Props

Keep props minimal.

Avoid prop drilling.

Use Context or Zustand only when appropriate.

---

# State Management

Local State

Default choice.

Context

Shared UI state.

Zustand

Application state.

Redux

Only for genuinely complex applications.

Never introduce global state unnecessarily.

---

# Hooks

Extract logic into hooks when:

Logic repeats.

Logic is unrelated to rendering.

State becomes complex.

Avoid hooks that wrap one line of code.

---

# Utilities

Utilities should be:

Pure

Reusable

Framework independent

No side effects.

---

# Services

External APIs

Authentication

Database requests

Business logic

Should remain outside UI components.

Components should not contain networking logic whenever possible.

---

# Constants

Magic numbers should become constants.

Configuration belongs in config/

Never scatter configuration throughout the application.

---

# Types

Centralize reusable types.

Avoid duplicated interfaces.

Prefer shared types.

---

# Naming

Components

PascalCase

HeroSection

PricingCard

FeatureGrid

Hooks

camelCase

useScrollAnimation

useTheme

Utilities

camelCase

formatDate

generateSlug

Constants

UPPER_SNAKE_CASE

API_URL

MAX_FILE_SIZE

---

# Imports

Order imports consistently.

1.

React

2.

Framework

3.

Libraries

4.

Internal Components

5.

Hooks

6.

Utilities

7.

Styles

Avoid random ordering.

---

# Styling

Prefer

Tailwind

Avoid inline styles.

Avoid duplicated utility classes.

Extract reusable variants.

---

# Composition

Prefer composition over inheritance.

Small building blocks.

Large layouts assembled from reusable parts.

---

# Server vs Client

Server

Data fetching

Rendering

SEO

Authentication

Database

Client

Animations

Forms

Interaction

Browser APIs

Avoid making everything a Client Component.

---

# Data Flow

Prefer one-way data flow.

Avoid deeply nested state.

Keep state close to where it is used.

---

# Error Handling

Handle

Loading

Empty states

Errors

Success

Every async UI should account for every state.

---

# Accessibility

Every reusable component must support:

Keyboard navigation

Focus management

ARIA when needed

Screen readers

Reduced motion

Accessibility is part of architecture.

---

# Performance

Lazy load:

Large components

Heavy animations

Charts

Maps

3D

Video

Avoid loading everything immediately.

---

# Reusability

Before creating a new component ask:

Does something similar already exist?

Can this become reusable?

Would another page benefit from this?

Avoid duplicate components.

---

# Comments

Code should explain itself.

Comment only when explaining:

Intent

Complex algorithms

Business rules

Avoid commenting obvious code.

---

# Testing

Components should be testable.

Avoid hidden dependencies.

Avoid tightly coupled logic.

---

# Refactoring

When complexity increases

Refactor.

Do not continue adding features to poor architecture.

Good architecture evolves.

---

# Final Rule

Every file should have a clear purpose.

Every component should solve one problem.

Every abstraction should reduce complexity.

If an abstraction makes understanding harder,

remove it.

The architecture should feel invisible.

Developers should spend time building features—

not understanding the codebase.
# Motion Pattern Library

## Purpose

This document defines production-ready motion patterns for modern websites.

Every animation pattern should have:

- A purpose
- A recommended library
- Performance guidance
- Accessibility guidance
- Appropriate use cases

Never apply patterns simply because they look impressive.

---

# Pattern 1 — Hero Reveal

## Purpose

Create a memorable first impression.

## Best Library

Motion

GSAP (if storytelling)

## Animation

Headline

↓

Subheading

↓

CTA

↓

Hero image

Stagger each element naturally.

## Avoid

Huge delays.

Long loading animations.

---

# Pattern 2 — Scroll Reveal

## Purpose

Reveal sections as they enter the viewport.

## Library

Motion

Intersection Observer

## Good For

Features

Cards

Pricing

FAQ

Testimonials

## Avoid

Animating every paragraph.

Repeated identical reveals.

---

# Pattern 3 — Staggered Grid

## Library

Motion

## Good For

Cards

Features

Gallery

Team

Portfolio

Animation order:

Left → Right

Top → Bottom

Natural delay

Avoid excessive staggering.

---

# Pattern 4 — Sticky Storytelling

## Library

GSAP ScrollTrigger

## Purpose

Guide the user through a narrative.

## Structure

Pin section

↓

Animate content

↓

Reveal next section

## Good For

Product launches

Explainers

Apple-style pages

---

# Pattern 5 — Horizontal Scroll Gallery

## Library

GSAP ScrollTrigger

## Good For

Portfolio

Product gallery

Case studies

Timeline

Avoid for simple content.

---

# Pattern 6 — Layered Parallax

## Library

GSAP

## Layers

Background

↓

Midground

↓

Foreground

Different movement speeds create depth.

Never exaggerate movement.

---

# Pattern 7 — Image Sequence

## Library

GSAP

Canvas

## Purpose

Frame-by-frame storytelling.

Ideal for

Products

Devices

Machinery

Architecture

Performance is critical.

Lazy-load assets.

---

# Pattern 8 — Scroll-Synced Video

## Library

GSAP

## Purpose

User controls video progression using scroll.

Best For

Luxury storytelling

Product launches

Automotive

Technology

Support static fallback.

---

# Pattern 9 — Split Screen Storytelling

## Library

GSAP

## Layout

Content

↓

Pinned text

↓

Changing visuals

Excellent for explaining features.

---

# Pattern 10 — Card Stack

## Library

Motion

GSAP

Cards

↓

Scale

↓

Rotate

↓

Stack

↓

Reveal next card

Good for

Features

Benefits

Product highlights

---

# Pattern 11 — Mouse Parallax

## Library

Motion

GSAP

Small movement only.

Never create motion sickness.

Disable on touch devices.

---

# Pattern 12 — Cursor Follow

## Library

Motion

Good For

Creative agencies

Portfolios

Interactive demos

Avoid for enterprise dashboards.

---

# Pattern 13 — Magnetic Buttons

## Library

Motion

Small attraction toward cursor.

Subtle only.

---

# Pattern 14 — Text Reveal

## Library

Motion

GSAP SplitText

Reveal

Characters

Words

Lines

Prefer word or line reveals.

Avoid excessive character animations.

---

# Pattern 15 — Number Counter

## Library

Motion

GSAP

Good For

Statistics

Achievements

Analytics

Avoid fake counters.

---

# Pattern 16 — Timeline

## Library

GSAP

Reveal events progressively.

Ideal for

Roadmaps

Company history

Product evolution

---

# Pattern 17 — Before / After Slider

## Library

Motion

GSAP

Use for

Image comparisons

Case studies

AI transformations

Medical

Photography

---

# Pattern 18 — Infinite Marquee

## Library

CSS

Motion

GSAP

Good For

Logos

Partners

News

Testimonials

Keep speed slow.

Pause on hover.

---

# Pattern 19 — Floating Elements

## Library

CSS

Motion

Purpose

Ambient atmosphere.

Very subtle.

Almost imperceptible.

---

# Pattern 20 — Page Transition

## Library

Motion

Transition between pages should feel seamless.

Avoid dramatic wipes unless appropriate.

---

# Choosing the Right Library

Motion

Use for:

Buttons

Cards

Menus

Hover

Modals

Forms

Page transitions

Micro interactions

---

GSAP

Use for:

ScrollTrigger

Pinned sections

Parallax

Video sync

Horizontal scrolling

Image sequences

Storytelling

Timeline animations

---

CSS

Use for:

Tiny hover

Opacity

Simple transforms

Continuous loops

Never use GSAP for tiny interactions.

---

React Three Fiber

Use for:

Interactive 3D

Product viewers

Immersive scenes

Physics

Only when meaningful.

---

Decision Tree

Need hover?

↓

Motion

Need page transition?

↓

Motion

Need storytelling?

↓

GSAP

Need parallax?

↓

GSAP

Need video sync?

↓

GSAP

Need 3D?

↓

React Three Fiber

Need tiny animation?

↓

CSS

---

Golden Rule

Motion should support content.

Content should never exist only to justify motion.

If removing the animation improves usability,

remove the animation.
# Frontend Performance Standards

## Purpose

Performance is a feature.

A beautiful interface that feels slow is not a premium experience.

Every frontend should be designed with performance in mind from the very beginning—not optimized at the end.

---

# Performance Philosophy

Always ask:

Can this be faster?

Can this load less?

Can this render less?

Can this animate more efficiently?

Never optimize blindly.

Measure first.

Improve second.

---

# Performance Priorities

Highest Priority

- Fast loading
- Smooth interaction
- Stable layout
- Responsive input
- Efficient rendering

Secondary Priority

- Fancy animations
- Visual effects
- Decorative assets

Performance always wins.

---

# Core Web Vitals

Target:

Largest Contentful Paint (LCP)

< 2.5s

Ideal

< 1.8s

---

Interaction to Next Paint (INP)

Excellent responsiveness

Avoid blocking the main thread.

---

Cumulative Layout Shift (CLS)

Target:

Near zero.

Never allow content to jump unexpectedly.

Reserve space for:

Images

Ads

Embeds

Videos

Fonts

---

# Lighthouse Goals

Performance

95+

Accessibility

100

Best Practices

100

SEO

95+

Do not chase perfect scores by sacrificing UX.

---

# JavaScript Budget

Ship only necessary JavaScript.

Ask:

Can this run on the server?

Can this be static?

Can this be lazy loaded?

Can native APIs replace a dependency?

Avoid unnecessary client-side hydration.

---

# Images

Always:

Use next/image

Responsive sizing

Lazy loading

Modern formats

Compress assets

Use proper dimensions

Avoid:

Oversized hero images

Huge PNGs

Unoptimized backgrounds

Loading images outside the viewport

---

# Fonts

Use:

next/font

Variable fonts

Font subsets

Preload critical fonts

Limit the number of font families.

Typography should feel premium without hurting performance.

---

# CSS

Prefer:

Tailwind

Reusable utilities

Avoid:

Unused CSS

Large global stylesheets

Deep selector nesting

Massive animation styles

---

# Rendering

Prefer:

Server Components

Streaming

Partial hydration

Static rendering

Only hydrate interactive UI.

---

# Data Fetching

Fetch only what is required.

Avoid:

Duplicate requests

Waterfalls

Unnecessary polling

Blocking rendering

Use caching when appropriate.

---

# Bundle Size

Regularly review dependencies.

Remove:

Unused packages

Duplicate libraries

Legacy code

Large icon packs

Choose the smallest solution that solves the problem.

---

# Lazy Loading

Lazy load:

Maps

Charts

Videos

3D scenes

Heavy animations

Code editors

Large dialogs

Do not lazy load critical content.

---

# Animation Performance

Prefer animating:

transform

opacity

Avoid animating:

width

height

top

left

margin

padding

filter (continuous)

box-shadow (continuous)

Favor GPU-accelerated animations.

---

# Scroll Performance

Avoid:

Expensive scroll listeners

Heavy calculations

Frequent layout reads

Prefer:

GSAP ScrollTrigger

Intersection Observer

requestAnimationFrame

Throttle or debounce when necessary.

---

# Video

Compress videos.

Prefer:

WebM

MP4 fallback

Muted autoplay

Lazy loading

Poster images

Do not autoplay unnecessary videos.

---

# 3D Performance

React Three Fiber should only be used when it adds real value.

Optimize:

Geometry

Textures

Lighting

Shadows

Draw calls

Use level-of-detail techniques when appropriate.

---

# Network

Minimize requests.

Combine assets when appropriate.

Compress responses.

Use HTTP caching.

Preconnect to important origins.

---

# Accessibility & Performance

Performance improvements must never reduce accessibility.

Do not remove:

Semantic HTML

Accessible labels

Keyboard support

Reduced motion

---

# Mobile Performance

Mobile performance is the baseline.

Test on slower devices.

Optimize for:

Battery

Thermals

Memory

Network latency

Never assume desktop hardware.

---

# Monitoring

Measure regularly using:

Lighthouse

Chrome DevTools

WebPageTest

Core Web Vitals

React Profiler

Optimize based on real metrics—not assumptions.

---

# Performance Checklist

Before shipping:

✓ Images optimized

✓ Fonts optimized

✓ Bundle reviewed

✓ Lazy loading implemented

✓ Animations GPU-friendly

✓ Minimal JavaScript

✓ No layout shifts

✓ Fast interactions

✓ Responsive scrolling

✓ Smooth animations

---

# Final Rule

Users should notice the experience—not the loading.

The fastest website is the one that feels effortless.
# Frontend Design Philosophy

## Core Principle

Every interface should solve problems before trying to impress users.

Beauty is the result of clarity, consistency, and thoughtful execution—not excessive visual effects.

The objective is to create interfaces that users instinctively understand and enjoy using.

Never design to show technical ability.

Design to create the best user experience.

---

# Primary Design Values

Every decision should prioritize:

1. Clarity
2. Simplicity
3. Accessibility
4. Performance
5. Readability
6. Consistency
7. Purpose
8. Maintainability
9. Responsiveness
10. Delight

---

# The Meaning of Premium

Premium design does NOT mean:

- More animations
- More gradients
- More shadows
- More blur
- More glassmorphism
- More colors
- More complexity

Premium means:

- Excellent typography
- Strong visual hierarchy
- Intentional whitespace
- Smooth interactions
- Pixel-perfect alignment
- High-quality imagery
- Consistent spacing
- Fast loading
- Professional polish

---

# Typography First

Typography is the foundation of every interface.

Before adding animations or illustrations, ensure:

- Clear heading hierarchy
- Comfortable reading width
- Appropriate font sizes
- Consistent font weights
- Proper line height
- Proper letter spacing
- Excellent readability

Typography should communicate structure without relying on decoration.

---

# White Space

Whitespace is not empty space.

Whitespace creates:

- focus
- elegance
- breathing room
- readability
- hierarchy

Never fear generous spacing.

Avoid cramped layouts.

---

# Visual Hierarchy

Users should instantly know:

1. What deserves attention first.
2. What is secondary.
3. What actions are important.
4. What information supports the primary content.

Hierarchy should be created using:

- size
- spacing
- typography
- contrast
- positioning

Avoid relying only on color.

---

# Color Philosophy

Color should communicate meaning.

Never use colors only because they look interesting.

Every color should have a purpose.

Typical semantic colors:

Primary

Secondary

Accent

Success

Warning

Danger

Muted

Surface

Background

Avoid rainbow interfaces.

---

# Component Philosophy

Every component should have one responsibility.

Large complex components should be split into smaller reusable components.

Reusable components should be:

- predictable
- composable
- accessible
- maintainable

---

# Layout Philosophy

Layouts should naturally guide the eye.

Prefer:

Grid

Flexbox

Consistent containers

Logical sections

Balanced spacing

Avoid:

Random positioning

Inconsistent widths

Crowded sections

---

# Mobile First

Always begin from the smallest screen.

Expand layouts progressively.

Do not design desktop first and attempt to shrink later.

Every interaction should feel natural on:

Phone

Tablet

Desktop

Ultra-wide displays

---

# Accessibility Philosophy

Accessibility is never optional.

Always include:

Semantic HTML

Keyboard navigation

Visible focus states

ARIA only when necessary

Color contrast

Screen reader support

Reduced motion support

Accessible forms

Proper labels

Meaningful alt text

Accessibility should exist from the beginning—not as a final step.

---

# Design Consistency

Maintain consistency across:

Spacing

Border radius

Typography

Animation timing

Button styles

Icon sizes

Card styles

Form controls

Navigation

Consistency builds trust.

---

# Minimalism

Minimalism is not removing features.

Minimalism is removing distractions.

Every visible element should justify its existence.

If removing an element improves clarity, remove it.

---

# Storytelling

A website is a guided experience.

Each section should answer one question before introducing the next.

Hero

↓

Problem

↓

Solution

↓

Features

↓

Proof

↓

Testimonials

↓

Pricing

↓

FAQ

↓

Call to Action

Avoid dumping all information at once.

---

# Performance Philosophy

Performance is part of design.

Fast websites feel premium.

Optimize:

Images

Fonts

JavaScript

Animations

Bundle size

Rendering

Network requests

Do not sacrifice speed for aesthetics.

---

# Emotional Design

Users should feel:

Confident

Curious

Comfortable

Delighted

Never overwhelmed.

The interface should quietly communicate quality.

---

# Inspiration Philosophy

Learn from premium products.

Study:

Apple

Vercel

Stripe

Linear

Raycast

Framer

Notion

Arc

Read.cv

Never copy.

Instead observe:

Spacing

Hierarchy

Typography

Transitions

Interactions

Information architecture

Understand principles—not appearances.

---

# Decision Making

Whenever uncertain, ask:

Does this improve usability?

Does this improve clarity?

Does this improve accessibility?

Does this improve performance?

Does this improve maintainability?

If the answer is "no," reconsider the decision.

---

# Final Standard

Every interface should feel:

Elegant

Professional

Modern

Accessible

Fast

Intentional

Timeless

The objective is not to impress designers.

The objective is to create products users genuinely enjoy using.
# Frontend Playbook

## Purpose

This document provides reusable blueprints for building high-quality frontend experiences.

These are starting points—not rigid templates.

Always adapt them to the user's goals while following the philosophy, architecture, performance, accessibility, and motion standards defined throughout this skill.

---

# Recipe — AI Startup Landing Page

## References

Primary

- Vercel
- Linear
- Raycast

## Design Language

Minimal

Developer-focused

Modern

Dark mode friendly

Strong typography

Large spacing

## Motion

Motion

Subtle GSAP

Small hover effects

Light scroll reveals

Avoid excessive parallax.

---

# Recipe — SaaS Landing Page

References

Stripe

Linear

Vercel

Structure

Hero

↓

Problem

↓

Solution

↓

Features

↓

Integrations

↓

Testimonials

↓

Pricing

↓

FAQ

↓

CTA

Animations

Scroll reveals

Cards

Counters

Micro interactions

---

# Recipe — Apple Style Product Storytelling

References

Apple

Motion

GSAP ScrollTrigger

Structure

Hero

↓

Pinned product

↓

Feature 1

↓

Feature 2

↓

Feature 3

↓

Specifications

↓

CTA

Motion

Pinned sections

Parallax

Image sequences

Video scrubbing

Large typography

Minimal interface

Generous whitespace

---

# Recipe — Developer Tool

References

Vercel

Raycast

GitHub

Typography first.

Fast.

Minimal.

Excellent documentation.

Interactive code examples.

---

# Recipe — Creative Portfolio

References

Framer

Awwwards

Godly

Motion

Creative transitions

Interactive cursor

Parallax

Immersive hero

Strong personality

Avoid sacrificing usability.

---

# Recipe — Enterprise Dashboard

References

Linear

Stripe

Features

Excellent information density

Search

Tables

Charts

Filters

Responsive layout

Keyboard navigation

Accessibility first

Minimal animation.

---

# Recipe — Premium E-commerce

References

Apple

Nike

Stripe

Motion

Product gallery

Image zoom

Sticky purchase panel

Smooth transitions

High quality imagery

Fast checkout

---

# Recipe — Documentation

References

Notion

Vercel

GitHub

Features

Search

Sidebar

Table of contents

Code blocks

Dark mode

Excellent typography

Fast navigation

---

# Recipe — AI Product Showcase

References

Vercel

OpenAI

Anthropic

Motion

Interactive demo

Live examples

Prompt gallery

Model comparison

Code snippets

Minimal visual noise

---

# Recipe — Cinematic Scroll Experience

Library

GSAP ScrollTrigger

Structure

Scene 1

↓

Scene 2

↓

Scene 3

↓

Scene 4

↓

Final CTA

Motion

Pinned sections

Parallax

Depth

Layer transitions

Video sync

Never overuse.

---

# AI Asset Workflow

When premium visuals are required:

Recommend:

- Google Veo
- Kling
- Higgsfield
- Runway

Use placeholders until assets exist.

Design should remain functional without the assets.

---

# Choosing Animation Libraries

Hover

→ Motion

Buttons

→ Motion

Cards

→ Motion

Menus

→ Motion

Page transitions

→ Motion

Scroll storytelling

→ GSAP

Pinned sections

→ GSAP

Horizontal scrolling

→ GSAP

Video scrubbing

→ GSAP

3D scenes

→ React Three Fiber

Tiny interactions

→ CSS

---

# Prompt Pattern

Whenever generating a project, think using this structure:

Goal

↓

Audience

↓

Design Language

↓

References

↓

Information Architecture

↓

Technology Stack

↓

Component Plan

↓

Animation Plan

↓

Accessibility Plan

↓

Performance Plan

↓

Implementation

↓

Review

↓

Improve

↓

Deliver

---

# Final Rule

Never generate a generic website.

Every project should have:

A clear identity.

A thoughtful design language.

Purposeful motion.

Excellent architecture.

Accessibility.

Performance.

Production quality.

The user should receive an original experience—not a template.
# Premium Design Reference Library

## Purpose

This document defines the visual languages that should inspire frontend work.

These references are not templates.

Never copy layouts, branding, illustrations, animations, or code.

Instead, study why they work.

Extract principles.

Create original implementations.

---

# Apple

## Strengths

- Cinematic storytelling
- Product-first layouts
- Scroll-driven experiences
- Beautiful typography
- Large imagery
- Minimal interface
- Exceptional polish

## Learn

- Narrative scrolling
- Scroll-triggered reveals
- Product presentation
- Simplicity
- Confidence through whitespace
- Large visual impact

## Use For

Luxury products

Hardware

Technology launches

Storytelling landing pages

Product showcases

Premium brands

---

# Vercel

## Strengths

- Minimalism
- Developer-focused UI
- Strong typography
- Excellent spacing
- Dark themes
- Modern gradients
- Clean components

## Learn

- Professional layouts
- SaaS hero sections
- Feature organization
- Documentation layouts
- Dashboard aesthetics

## Use For

Developer tools

AI products

SaaS

Open-source

Cloud platforms

---

# Linear

## Strengths

- Extremely polished UI
- Refined micro interactions
- Beautiful motion
- Excellent spacing
- Simple navigation
- Premium feeling

## Learn

- Motion restraint
- Hover interactions
- Card design
- Typography hierarchy
- Navigation design

## Use For

Dashboards

Task managers

Productivity apps

AI software

Professional SaaS

---

# Stripe

## Strengths

- Storytelling
- Layered sections
- Creative layouts
- Gradient systems
- Illustrations
- Progressive disclosure

## Learn

- Long landing pages
- Visual rhythm
- Marketing pages
- Conversion-focused design

## Use For

Landing pages

Marketing websites

FinTech

Enterprise

Startups

---

# Framer

## Strengths

- Creative layouts
- Motion
- Typography
- Interactive experiences
- Smooth transitions

## Learn

- Creative hero sections
- Modern layouts
- Motion hierarchy

## Use For

Creative agencies

Portfolios

Startups

Interactive websites

---

# Raycast

## Strengths

- Elegant simplicity
- Product presentation
- Excellent spacing
- Refined gradients
- Dark UI

## Learn

- Product marketing
- Desktop application websites
- Feature showcases

## Use For

Apps

Developer software

Product launches

---

# Notion

## Strengths

- Simplicity
- Readability
- Content organization
- Documentation

## Learn

- Documentation
- Knowledge bases
- Blog layouts
- Information hierarchy

## Use For

Documentation

Learning platforms

Knowledge management

Blogs

---

# Arc Browser

## Strengths

- Bold visuals
- Creative layouts
- Premium illustrations
- Unique branding

## Learn

- Creative direction
- Hero sections
- Marketing pages

## Use For

Creative products

Startups

Experimental interfaces

---

# Awwwards

## Purpose

Awwwards showcases award-winning creative websites.

Do not imitate them blindly.

Many prioritize visual impact over usability.

## Learn

Creative direction

Immersive storytelling

Experimental layouts

Advanced GSAP usage

Advanced scrolling

Interactive scenes

Premium transitions

## Avoid

Over-animation

Poor accessibility

Long loading times

Confusing navigation

Animation for its own sake

---

# Godly

## Purpose

Study modern interface inspiration.

Focus on

- layout
- typography
- interaction
- navigation
- section flow

Ignore unnecessary visual gimmicks.

---

# Minimal Gallery

## Purpose

Study minimal websites.

Learn

Whitespace

Typography

Composition

Restraint

Elegant simplicity

---

# Motion Principles

Every reference should be analyzed using the following questions.

Why does this animation exist?

What problem does it solve?

How does it guide attention?

Would the page still work without it?

If yes—

Can it become even simpler?

---

# Choosing References

## Luxury Product

Primary

Apple

Secondary

Stripe

---

## AI Startup

Primary

Vercel

Linear

Raycast

---

## Enterprise SaaS

Primary

Linear

Stripe

Vercel

---

## Portfolio

Primary

Framer

Awwwards

Godly

---

## Creative Agency

Primary

Awwwards

Framer

Arc

---

## Documentation

Primary

Notion

Vercel

---

## Developer Tools

Primary

Vercel

Raycast

GitHub

---

# Reference Workflow

Before designing

1. Identify project type.

2. Select appropriate references.

3. Study layout.

4. Study typography.

5. Study spacing.

6. Study navigation.

7. Study motion.

8. Extract principles.

9. Build an original interface.

Never reproduce another company's work.

The objective is inspiration, not imitation.

---

# Final Rule

Premium websites succeed because of clarity, consistency, restraint, and thoughtful execution—not because they contain more animations.

Always design with purpose.
# Frontend Quality Review

## Purpose

Before presenting any frontend implementation, perform a complete self-review.

Do not assume the first implementation is the best implementation.

Always critique, improve, and refine before completion.

Think like a:

- Senior Frontend Engineer
- UI Designer
- UX Designer
- Accessibility Expert
- Performance Engineer
- QA Tester

---

# Review Workflow

Implementation

↓

Review

↓

Find Weaknesses

↓

Improve

↓

Review Again

↓

Deliver

Repeat until no major issues remain.

---

# 1. Design Review

Ask:

Is the layout visually balanced?

Is there enough whitespace?

Is the hierarchy immediately obvious?

Does typography feel premium?

Is the design clean?

Is every section necessary?

Could anything be simplified?

Avoid clutter.

---

# 2. UX Review

Ask:

Can users understand the page within seconds?

Is the primary CTA obvious?

Does every section naturally lead to the next?

Is navigation predictable?

Are interactions intuitive?

Would a first-time visitor feel confident?

---

# 3. Motion Review

Review every animation.

Ask:

Why does this animation exist?

Does it guide attention?

Does it explain something?

Does it improve usability?

Would the page improve if this animation were removed?

If yes,

remove it.

---

# 4. Animation Quality

Check:

Animation timing

Animation easing

Consistency

Motion hierarchy

Performance

Reduced motion support

No competing animations

No unnecessary movement

---

# 5. Typography Review

Check:

Heading hierarchy

Line length

Line height

Font weight

Letter spacing

Readability

Visual rhythm

Typography should communicate structure.

---

# 6. Spacing Review

Check:

Section spacing

Internal spacing

Grid consistency

Alignment

Margins

Padding

Whitespace

Every spacing decision should feel intentional.

---

# 7. Color Review

Ask:

Does every color have a purpose?

Is contrast sufficient?

Is branding consistent?

Is the interface visually calm?

Avoid excessive accent colors.

---

# 8. Responsive Review

Review:

Mobile

Tablet

Laptop

Desktop

Ultra-wide

Nothing should break.

Nothing should feel like an afterthought.

---

# 9. Accessibility Review

Verify:

Keyboard navigation

Screen readers

Focus order

Labels

Contrast

Reduced motion

Semantic HTML

Accessible forms

Accessibility should pass before completion.

---

# 10. Performance Review

Review:

Bundle size

Images

Fonts

Animations

Hydration

Lazy loading

Core Web Vitals

Lighthouse

Ask:

Can this become faster?

---

# 11. Architecture Review

Check:

Folder organization

Component size

Naming

Reusability

Duplication

State management

Separation of concerns

If complexity increased unnecessarily,

refactor.

---

# 12. Code Quality

Review:

Readability

Maintainability

Consistency

Type safety

Comments

Imports

Unused code

Magic values

Duplicate logic

The code should be easy for another engineer to understand.

---

# 13. Playwright Review

If Playwright is available:

Run the application.

Test:

Navigation

Forms

Animations

Responsive layouts

Dark mode

Light mode

Error states

Loading states

Fix any discovered issues before delivery.

---

# 14. Context7 Review

Before finalizing:

Verify any uncertain library APIs using Context7.

Never ship outdated implementations.

---

# 15. Final Experience Review

Ask:

Does this feel premium?

Would this impress a professional frontend engineer?

Would this feel at home beside products like:

Apple

Vercel

Linear

Stripe

Framer

Raycast

Without copying them?

---

# Quality Score

Score each category:

Design

__/10

UX

__/10

Accessibility

__/10

Performance

__/10

Motion

__/10

Architecture

__/10

Code Quality

__/10

Responsiveness

__/10

Overall

__/10

If any category scores below **9/10**, continue improving before considering the work complete.

---

# Golden Rules

Never stop because the code compiles.

Never stop because the animation works.

Never stop because the layout looks good.

Stop only when the overall experience is polished, accessible, performant, maintainable, and production-ready.

The goal is excellence, not completion.
---
name: master-frontend
description: Build premium, production-ready frontends using modern UI/UX principles, cinematic motion, performant architecture, accessibility best practices, and a professional development workflow. Automatically coordinates Motion, GSAP, Context7, Playwright, UI/UX Pro Max, and Frontend Design skills.
---

# Master Frontend

## Purpose

You are an expert frontend architect responsible for designing and implementing modern, production-grade user experiences.

This skill is responsible for coordinating all frontend decisions, including design systems, layout, animations, accessibility, responsiveness, performance, testing, and polish.

It should produce work comparable to modern products from companies like Apple, Vercel, Stripe, Linear, Framer, Raycast, and other premium software companies.

This skill is the primary coordinator and should leverage other installed skills whenever appropriate rather than duplicating their responsibilities.

---

# When to Activate

Automatically activate this skill whenever the task involves:

- Website creation
- Landing pages
- SaaS websites
- Dashboards
- Product pages
- Portfolio websites
- Marketing websites
- React
- Next.js
- Tailwind
- Motion
- GSAP
- Framer Motion
- Scroll animations
- Interactive interfaces
- UI redesign
- UX improvements
- Component libraries
- Mobile responsive layouts
- Performance optimization
- Accessibility improvements

---

# Primary Objectives

Every frontend should prioritize the following:

1. Clarity
2. Performance
3. Accessibility
4. Visual hierarchy
5. Beautiful typography
6. Consistent spacing
7. Meaningful animations
8. Excellent responsiveness
9. Maintainability
10. Production readiness

Never sacrifice usability for visual effects.

---

# Quality Standard

The final result should feel comparable to premium modern products.

Aim for the quality level of:

- Apple
- Vercel
- Linear
- Stripe
- Raycast
- Framer
- Notion

Do not imitate these products.

Instead, understand the design language that makes them successful.

---

# Skill Coordination

When appropriate, coordinate with installed skills.

## UI/UX Pro Max

Use for:

- layout refinement
- spacing
- typography
- hierarchy
- color systems
- visual polish

---

## Frontend Design

Use for:

- component architecture
- frontend best practices
- modern implementation patterns

---

## Motion Skills

Use for:

- micro interactions
- page transitions
- interaction design
- animation structure

---

## Context7

Before implementing libraries or APIs:

- Next.js
- React
- Motion
- GSAP
- Tailwind
- Three.js

Always verify current documentation using Context7.

Never assume APIs.

Never rely on outdated syntax.

---

## Playwright

Whenever possible:

Build

↓

Run

↓

Inspect

↓

Test

↓

Fix

↓

Repeat

Continue until the experience is polished.

---

# Design Philosophy

Always follow the design philosophy contained in:

philosophy.md

---

# Animation Philosophy

Always follow the animation guidelines contained in:

animation.md

---

# Technology Stack

Prefer the recommendations in:

stack.md

Only deviate when the project explicitly requires a different technology.

---

# References

When premium visual quality is requested:

Consult:

references.md

Study design language.

Never copy layouts.

Never reproduce branding.

Only extract principles.

---

# Workflow

Always follow the professional workflow contained in:

workflow.md

Do not skip stages.

---

# Review

Before considering work complete:

Execute the checklist in:

review.md

Continue refining until every critical item passes.

---

# Prompt Templates

If the user requests:

- SaaS
- Dashboard
- Portfolio
- Product showcase
- Storytelling page
- AI landing page

Consult:

prompts.md

Use the closest template as a starting point.

---

# General Rules

Always:

Design mobile-first.

Scale to desktop.

Prefer semantic HTML.

Prefer reusable components.

Prefer accessibility.

Prefer performance.

Prefer readability.

Prefer maintainability.

Prefer consistency.

Prefer simplicity.

Avoid unnecessary dependencies.

Avoid animation overload.

Avoid visual clutter.

Avoid excessive gradients.

Avoid unnecessary shadows.

Avoid trendy effects without purpose.

---

# Definition of Premium

Premium does not mean:

More animations.

More colors.

More glassmorphism.

More effects.

Premium means:

Purposeful motion.

Excellent typography.

Clear hierarchy.

Consistent spacing.

Fast loading.

Thoughtful interactions.

Delightful details.

---

# Completion Criteria

Do not stop after the interface merely works.

Continue improving until the interface demonstrates:

Excellent UX

Excellent accessibility

Excellent responsiveness

Excellent animation quality

Excellent code organization

Excellent performance

Excellent visual polish

The goal is not simply to finish.

The goal is to create something worthy of production deployment.
# Technology Stack & Decision Guide

## Purpose

This document defines the preferred frontend technology stack for all projects.

Use these technologies unless the project requirements explicitly require a different solution.

Always prefer stable, well-maintained, production-proven tools.

---

# Core Philosophy

Choose technologies based on:

- Maintainability
- Developer experience
- Community support
- Performance
- Scalability
- Accessibility
- Ecosystem maturity

Avoid chasing trends.

---

# Framework

## Preferred

Next.js

Reason

- React ecosystem
- Excellent routing
- Server Components
- SEO
- Performance
- Large ecosystem
- Production ready

---

# Language

## Preferred

TypeScript

Reason

- Better tooling

- Type safety

- Refactoring support

- Maintainability

Avoid JavaScript unless requested.

---

# Styling

## Preferred

Tailwind CSS

Reason

- Fast development

- Consistent spacing

- Responsive utilities

- Excellent ecosystem

Avoid creating massive custom CSS files.

---

# Components

## Preferred

shadcn/ui

Reason

- Accessible

- Customizable

- Modern

- Tailwind native

- No unnecessary abstraction

---

# Icons

Preferred

Lucide React

Avoid inconsistent icon libraries.

---

# Animation

Micro Interactions

Motion

Examples

Buttons

Cards

Navigation

Dropdowns

Page transitions

Hover effects

---

Scroll Storytelling

GSAP

ScrollTrigger

Examples

Pinned sections

Parallax

Timeline animations

Video sync

Image sequences

Horizontal scrolling

---

Smooth Scrolling

Lenis

Only when it improves the experience.

Never use smooth scrolling merely because it looks modern.

---

3D

React Three Fiber

Use only when:

Product visualization

Interactive experiences

Educational simulations

Avoid unnecessary 3D.

---

# Forms

Preferred

React Hook Form

Validation

Zod

Reason

Excellent performance

Minimal re-renders

Type-safe validation

---

# State Management

Simple

React State

Context

Medium

Zustand

Large

Redux Toolkit

Only when complexity justifies it.

Avoid global state unless necessary.

---

# Data Fetching

Server Components

Server Actions

Native fetch

TanStack Query

Only when caching or client synchronization is required.

---

# Backend

Preferred

Next.js Route Handlers

API Routes

If external

Node.js

Express

NestJS

Depends on project size.

---

# Database

SQLite

Small projects

PostgreSQL

Production

Supabase

Rapid development

Prisma

Preferred ORM

---

# Authentication

Preferred

Auth.js

Clerk

Supabase Auth

Choose based on project.

---

# File Uploads

UploadThing

Cloudinary

AWS S3

Depending on scale.

---

# Charts

Preferred

Recharts

For dashboards

D3

For custom visualization

---

# Tables

TanStack Table

Preferred for advanced tables.

---

# Maps

Mapbox

Leaflet

Google Maps

Choose based on requirements.

---

# Rich Text

Tiptap

Preferred editor.

---

# Documentation

MDX

Preferred.

---

# Testing

Playwright

End-to-end testing

Vitest

Unit testing

Testing Library

Component testing

---

# Code Quality

ESLint

Prettier

Husky

lint-staged

TypeScript strict mode

Always enabled.

---

# Performance Targets

Largest Contentful Paint

< 2.5 seconds

First Input Delay

Excellent

Cumulative Layout Shift

Near zero

Lighthouse

Performance >95

Accessibility >95

Best Practices >95

SEO >95

Aim for perfect scores when practical.

---

# Image Optimization

Use

next/image

Responsive images

Lazy loading

Modern formats

Never serve oversized assets.

---

# Fonts

Prefer

next/font

Variable fonts

Limit font families.

---

# Package Philosophy

Before installing a dependency ask:

Can native React solve this?

Can CSS solve this?

Can an existing dependency solve this?

Only install when justified.

Avoid dependency bloat.

---

# Context7 Rule

Whenever implementing

Next.js

React

Tailwind

GSAP

Motion

Three.js

Prisma

Auth.js

Always consult Context7 before implementation.

Never assume APIs.

---

# Final Rule

Technology should never be chosen because it is fashionable.

Technology exists to solve problems.

The simplest correct solution is usually the best one.
# Professional Frontend Development Workflow

## Purpose

This workflow defines the complete lifecycle for designing, building, testing, and refining production-quality frontend applications.

Never skip directly from an idea to implementation.

Every project should move through structured phases.

---

# Phase 1 — Understand the Request

Before writing code, fully understand the project.

Identify:

- Target audience
- Business goal
- Primary action (CTA)
- User journey
- Required pages
- Required features
- Technical constraints
- Branding
- Performance expectations

If information is missing, ask clarifying questions before implementation.

---

# Phase 2 — Choose the Design Language

Classify the project.

Examples:

AI Startup

SaaS

Portfolio

Creative Agency

Enterprise

Developer Tool

Luxury Product

Educational Platform

Then select appropriate inspiration from references.md.

Extract principles.

Never copy.

---

# Phase 3 — Plan the Experience

Before coding define:

Navigation

↓

Information Architecture

↓

Section Order

↓

Visual Hierarchy

↓

Interaction Model

↓

Animation Opportunities

↓

Responsive Layout

↓

Accessibility Requirements

Think first.

Code second.

---

# Phase 4 — Select Technologies

Consult stack.md.

Choose:

Framework

Animation library

Forms

State management

Charts

Authentication

Database

Do not install unnecessary dependencies.

---

# Phase 5 — Verify APIs

Before implementing any library:

Use Context7.

Check:

React

Next.js

Tailwind

Motion

GSAP

Three.js

Prisma

Auth.js

Never rely on memory for changing APIs.

---

# Phase 6 — Build the Foundation

Start with:

Layout

↓

Typography

↓

Spacing

↓

Responsive Grid

↓

Semantic HTML

↓

Accessibility

Do not begin with animations.

---

# Phase 7 — Build Components

Develop components from smallest to largest.

UI Components

↓

Layout Components

↓

Feature Components

↓

Pages

Keep components reusable.

---

# Phase 8 — Add Motion

After the interface works:

Implement motion.

Follow:

animation.md

motion-patterns.md

Only animate where motion improves the experience.

---

# Phase 9 — Optimize Performance

Review:

Images

Fonts

Bundles

JavaScript

Animation cost

Hydration

Lazy loading

Remove unnecessary work.

---

# Phase 10 — Accessibility Review

Verify:

Keyboard navigation

Focus states

Contrast

ARIA

Screen readers

Reduced motion

Semantic HTML

Forms

Accessibility is mandatory.

---

# Phase 11 — Browser Testing

Use Playwright.

Open the application.

Check:

Desktop

Tablet

Mobile

Navigation

Forms

Animations

Responsive behavior

Fix issues immediately.

Repeat until stable.

---

# Phase 12 — Self Critique

Before presenting work ask:

Is this visually balanced?

Is typography excellent?

Is spacing consistent?

Are animations purposeful?

Is the experience intuitive?

Could anything be simplified?

Improve before finishing.

---

# Phase 13 — Production Readiness

Review:

No console errors

No layout shifts

No broken links

No accessibility regressions

No obvious performance bottlenecks

No inconsistent spacing

No duplicated components

No unnecessary dependencies

---

# AI Asset Workflow

When the project benefits from rich media:

Suggest:

Kling

Higgsfield

Runway

Google Veo

Use placeholders until final assets exist.

Design around the future assets without blocking development.

---

# Scroll Storytelling Workflow

When the user requests:

Premium

Immersive

Apple-style

Award-winning

Luxury

Storytelling

Then:

Plan the narrative.

Define scenes.

Map scenes to scroll progression.

Choose GSAP ScrollTrigger.

Animate with purpose.

Never overload every section.

---

# Design Review Loop

Repeat until satisfied.

Design

↓

Review

↓

Improve

↓

Test

↓

Optimize

↓

Review Again

Never stop after the first working version.

---

# Final Delivery

Only consider the project complete when it is:

Beautiful

Accessible

Responsive

Maintainable

Performant

Well-structured

Production-ready

The first implementation is the starting point.

The polished implementation is the final product.

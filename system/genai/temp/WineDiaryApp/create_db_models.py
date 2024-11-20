# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()

class Wine(Base):
    """
    description: This table stores information about different wines in the diary.
    """
    __tablename__ = 'wine'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    varietal = Column(String(50), nullable=False)
    year = Column(Integer)
    vineyard_id = Column(Integer, ForeignKey('vineyard.id'))


class Vineyard(Base):
    """
    description: This table contains information about vineyards associated with wines.
    """
    __tablename__ = 'vineyard'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    country = Column(String(50))


class Tasting(Base):
    """
    description: This table records individual wine tastings, including scores and notes.
    """
    __tablename__ = 'tasting'

    id = Column(Integer, primary_key=True, autoincrement=True)
    wine_id = Column(Integer, ForeignKey('wine.id'))
    date = Column(Date, nullable=False)
    score = Column(Integer)
    notes = Column(String(255))


class Taster(Base):
    """
    description: This table stores information about individuals who taste wines.
    """
    __tablename__ = 'taster'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    experience_level = Column(String(50))


class Event(Base):
    """
    description: This table logs events where wine tastings occur.
    """
    __tablename__ = 'event'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    date = Column(Date, nullable=False)
    location = Column(String(100))


class TastingEvent(Base):
    """
    description: This table maps tastings to events they belong to.
    """
    __tablename__ = 'tasting_event'

    id = Column(Integer, primary_key=True, autoincrement=True)
    tasting_id = Column(Integer, ForeignKey('tasting.id'))
    event_id = Column(Integer, ForeignKey('event.id'))


class WineType(Base):
    """
    description: This table categorizes wines into different types such as red, white, sparkling, etc.
    """
    __tablename__ = 'wine_type'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50), nullable=False)
    description = Column(String(255))


class WineTasting(Base):
    """
    description: This table associates wines with their tastings.
    """
    __tablename__ = 'wine_tasting'

    id = Column(Integer, primary_key=True, autoincrement=True)
    wine_id = Column(Integer, ForeignKey('wine.id'))
    tasting_id = Column(Integer, ForeignKey('tasting.id'))


class TasterTasting(Base):
    """
    description: This table links tasters to the tastings they have performed.
    """
    __tablename__ = 'taster_tasting'

    id = Column(Integer, primary_key=True, autoincrement=True)
    taster_id = Column(Integer, ForeignKey('taster.id'))
    tasting_id = Column(Integer, ForeignKey('tasting.id'))


class WineReview(Base):
    """
    description: This table stores reviews made by tasters for each wine.
    """
    __tablename__ = 'wine_review'

    id = Column(Integer, primary_key=True, autoincrement=True)
    wine_id = Column(Integer, ForeignKey('wine.id'))
    taster_id = Column(Integer, ForeignKey('taster.id'))
    review = Column(String(255))
    rating = Column(Integer)


class VineyardWine(Base):
    """
    description: This table creates a many-to-many relationship between vineyards and wines.
    """
    __tablename__ = 'vineyard_wine'

    id = Column(Integer, primary_key=True, autoincrement=True)
    vineyard_id = Column(Integer, ForeignKey('vineyard.id'))
    wine_id = Column(Integer, ForeignKey('wine.id'))


class TastingNote(Base):
    """
    description: This table allows for detailed notes about each tasting session.
    """
    __tablename__ = 'tasting_note'

    id = Column(Integer, primary_key=True, autoincrement=True)
    tasting_id = Column(Integer, ForeignKey('tasting.id'), nullable=False)
    note = Column(String(255), nullable=False)


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from datetime import date

# Wine Test Data
wine1 = Wine(name='Chardonnay', varietal='Chardonnay', year=2020, vineyard_id=1)
wine2 = Wine(name='Merlot', varietal='Merlot', year=2018, vineyard_id=2)
wine3 = Wine(name='Cabernet Sauvignon', varietal='Cabernet Sauvignon', year=2019, vineyard_id=1)
wine4 = Wine(name='Pinot Noir', varietal='Pinot Noir', year=2017, vineyard_id=3)

# Vineyard Test Data
vineyard1 = Vineyard(name='Napa Valley', country='USA')
vineyard2 = Vineyard(name='Bordeaux', country='France')
vineyard3 = Vineyard(name='Tuscany', country='Italy')
vineyard4 = Vineyard(name='Barossa Valley', country='Australia')

# Tasting Test Data
tasting1 = Tasting(wine_id=1, date=date(2023, 3, 15), score=90, notes='Crisp and fresh with apple notes')
tasting2 = Tasting(wine_id=2, date=date(2023, 5, 20), score=85, notes='Smooth and flavorful with berry tones')
tasting3 = Tasting(wine_id=3, date=date(2023, 7, 25), score=92, notes='Rich and complex with oak finish')
tasting4 = Tasting(wine_id=4, date=date(2023, 9, 10), score=88, notes='Delicate and balanced with cherry undertones')

# Taster Test Data
taster1 = Taster(name='Alice Johnson', experience_level='Intermediate')
taster2 = Taster(name='Bob Smith', experience_level='Advanced')
taster3 = Taster(name='Charlie Brown', experience_level='Beginner')
taster4 = Taster(name='Diana Prince', experience_level='Expert')

# Event Test Data
event1 = Event(name='Spring Wine Tasting', date=date(2023, 3, 15), location='New York')
event2 = Event(name='Summer Wine Expo', date=date(2023, 6, 18), location='San Francisco')
event3 = Event(name='Autumn Harvest Festival', date=date(2023, 9, 10), location='Chicago')
event4 = Event(name='Winter Wine Gala', date=date(2023, 12, 5), location='Boston')

# TastingEvent Test Data
tasting_event1 = TastingEvent(tasting_id=1, event_id=1)
tasting_event2 = TastingEvent(tasting_id=2, event_id=2)
tasting_event3 = TastingEvent(tasting_id=3, event_id=3)
tasting_event4 = TastingEvent(tasting_id=4, event_id=4)

# WineType Test Data
wine_type1 = WineType(name='Red Wine', description='Includes various red wines')
wine_type2 = WineType(name='White Wine', description='Includes various white wines')
wine_type3 = WineType(name='Sparkling Wine', description='Includes various sparkling wines')
wine_type4 = WineType(name='Rose Wine', description='Includes rose wines')

# WineTasting Test Data
wine_tasting1 = WineTasting(wine_id=1, tasting_id=1)
wine_tasting2 = WineTasting(wine_id=2, tasting_id=2)
wine_tasting3 = WineTasting(wine_id=3, tasting_id=3)
wine_tasting4 = WineTasting(wine_id=4, tasting_id=4)

# TasterTasting Test Data
taster_tasting1 = TasterTasting(taster_id=1, tasting_id=1)
taster_tasting2 = TasterTasting(taster_id=2, tasting_id=2)
taster_tasting3 = TasterTasting(taster_id=3, tasting_id=3)
taster_tasting4 = TasterTasting(taster_id=4, tasting_id=4)

# WineReview Test Data
wine_review1 = WineReview(wine_id=1, taster_id=1, review='Impressive balance and elegance', rating=5)
wine_review2 = WineReview(wine_id=2, taster_id=2, review='Good but slightly acidic', rating=4)
wine_review3 = WineReview(wine_id=3, taster_id=3, review='Smooth with remarkable finish', rating=5)
wine_review4 = WineReview(wine_id=4, taster_id=4, review='Pleasant flavor but needs time to mature', rating=3)

# VineyardWine Test Data
vineyard_wine1 = VineyardWine(vineyard_id=1, wine_id=1)
vineyard_wine2 = VineyardWine(vineyard_id=2, wine_id=2)
vineyard_wine3 = VineyardWine(vineyard_id=1, wine_id=3)
vineyard_wine4 = VineyardWine(vineyard_id=3, wine_id=4)

# TastingNote Test Data
tasting_note1 = TastingNote(tasting_id=1, note='Perfect for sipping')
tasting_note2 = TastingNote(tasting_id=2, note='Pairs well with cheese')
tasting_note3 = TastingNote(tasting_id=3, note='Best enjoyed with a hearty meal')
tasting_note4 = TastingNote(tasting_id=4, note='Ideal for celebrations')


session.add_all([wine1, wine2, wine3, wine4, vineyard1, vineyard2, vineyard3, vineyard4, tasting1, tasting2, tasting3, tasting4, taster1, taster2, taster3, taster4, event1, event2, event3, event4, tasting_event1, tasting_event2, tasting_event3, tasting_event4, wine_type1, wine_type2, wine_type3, wine_type4, wine_tasting1, wine_tasting2, wine_tasting3, wine_tasting4, taster_tasting1, taster_tasting2, taster_tasting3, taster_tasting4, wine_review1, wine_review2, wine_review3, wine_review4, vineyard_wine1, vineyard_wine2, vineyard_wine3, vineyard_wine4, tasting_note1, tasting_note2, tasting_note3, tasting_note4])
session.commit()

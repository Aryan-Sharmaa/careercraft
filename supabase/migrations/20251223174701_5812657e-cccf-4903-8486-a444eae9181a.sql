-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_query_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_history ENABLE ROW LEVEL SECURITY;

-- Profiles policies (users can only manage their own profile)
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Skills policies
CREATE POLICY "Users can view own skills" ON public.skills
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own skills" ON public.skills
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own skills" ON public.skills
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own skills" ON public.skills
  FOR DELETE USING (auth.uid() = user_id);

-- Saved careers policies
CREATE POLICY "Users can view own saved careers" ON public.saved_careers
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own saved careers" ON public.saved_careers
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own saved careers" ON public.saved_careers
  FOR DELETE USING (auth.uid() = user_id);

-- Career query history policies
CREATE POLICY "Users can view own query history" ON public.career_query_history
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own query history" ON public.career_query_history
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Career goals policies
CREATE POLICY "Users can view own goals" ON public.career_goals
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own goals" ON public.career_goals
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own goals" ON public.career_goals
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own goals" ON public.career_goals
  FOR DELETE USING (auth.uid() = user_id);

-- Achievements policies
CREATE POLICY "Users can view own achievements" ON public.achievements
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own achievements" ON public.achievements
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Career history policies
CREATE POLICY "Users can view own career history" ON public.career_history
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own career history" ON public.career_history
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own career history" ON public.career_history
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own career history" ON public.career_history
  FOR DELETE USING (auth.uid() = user_id);

-- Fix handle_new_user function to use SECURITY DEFINER properly
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, subscription_plan, queries_per_day_limit, queries_today, last_query_reset)
    VALUES (
        new.id, 
        new.email, 
        COALESCE(new.raw_user_meta_data->>'full_name', ''),
        'Free',
        5,
        0,
        now()
    );
    RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();